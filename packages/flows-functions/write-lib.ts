/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import glob from "glob";

const libraryPrefix = "FlowsFunctions";

export default function writeIndex(
  src: string,
  callback: (err: any, res: any) => void
) {
  glob(`${src}/**/*`, callback);
}

writeIndex("src", (err, res) => {
  if (err) {
    console.log(`[flows] Error. ${err}`);
  } else {
    const filepath = "src/index.ts";

    const date = new Date();

    const day = `0${date.getDay()}`;
    const month = `0${date.getMonth()}`;
    const year = date.getFullYear();

    fs.writeFileSync(
      filepath,
      `/**
 * * Flows Documentation
 *
 * @created ${month.slice(-2)} ${day.slice(-2)} ${year}
 *
 */
      
      `
    );
    (res as string[]).map((line0) => {
      const line = String(line0);
      const writable = line.replace("src/", "./").replace(".ts", "");
      const split = writable.split("/");
      const name = split.pop();

      if (
        !name?.includes(libraryPrefix) ||
        name.includes(".txt") ||
        name.includes(".test") ||
        name.includes(".spec")
      ) {
        return;
      }

      const libraryExport = `export { ${name} } from '${writable}'`;
      fs.appendFileSync(filepath, `${libraryExport}\n`);
      return;
    });
  }
});
