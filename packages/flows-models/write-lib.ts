/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import glob from "glob";

const libraryPrefix = "FlowsModels";

export default function writeIndex(
  src: string,
  callback: (err: any, res: any) => void
) {
  glob(`${src}/**/*`, callback);
}

writeIndex("src", (err, res) => {
  if (err) {
    console.log(`[flows]: Error. ${err}`);
  } else {
    const filepath = "src/index.ts";

    const date = new Date();

    const day = `${date.getDate()}`;
    const month = `${date.getMonth()}`;
    const year = date.getFullYear();

    const modelsList: string[] = [];

    fs.writeFileSync(
      filepath,
      `import "reflect-metadata";

      /**
 * * Flows Documentation
 *
 * @created ${month} ${day} ${year}
 *
 */
      
      `
    );

    (res as string[]).map((line0) => {
      const line = String(line0);
      const writable = line.replace("src/", "./").replace(".ts", "");
      const split = writable.split("/");
      let name = split.pop();

      if (
        !name?.includes(libraryPrefix) ||
        name.includes(".basis") ||
        name.includes(".txt") ||
        name.includes(".test") ||
        name.includes(".spec")
      ) {
        return;
      }

      if (name.includes(".entity")) {
        name = name.slice(0, -`.entity`.length);
        modelsList.push(name);
      }

      const libraryExport = `export { ${name} } from '${writable}'`;
      fs.appendFileSync(filepath, `${libraryExport}\n`);

      return;
    });

    const modelsListFilePath = `models-list.flows.txt`;
    fs.writeFileSync(modelsListFilePath, ``);

    modelsList.map((model) => {
      fs.appendFileSync(modelsListFilePath, `${model},\n`);
      return;
    });
  }
});
