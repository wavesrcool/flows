/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import glob from "glob";

const libraryPrefix = "FlowsFunctions";
const typesFiguresPrefix = "TypesFiguresFlowsFunctions";
const typesResolvePrefix = "TypesResolveFlowsFunctions";

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

    fs.writeFileSync(
      filepath,
      `/**
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
      let name = split.pop() || "";
      const namePrefix = name.slice(0, `${libraryPrefix}`.length);
      const namePrefixTypesFigures = name.slice(
        0,
        `${typesFiguresPrefix}`.length
      );
      const namePrefixTypesResolve = name.slice(
        0,
        `${typesResolvePrefix}`.length
      );

      if (
        !(
          namePrefix === libraryPrefix ||
          namePrefixTypesFigures === typesFiguresPrefix ||
          namePrefixTypesResolve === typesResolvePrefix
        ) ||
        name.includes(".txt") ||
        name.includes(".test") ||
        name.includes(".spec") ||
        name.includes(".evaluate") ||
        name.includes(".graphql")
      ) {
        return;
      }

      if (name.includes(".resolver")) {
        name = name.slice(0, -`.resolver`.length);
      }

      if (name.includes(".class")) {
        name = name.slice(0, -`.class`.length);
      }

      const libraryExport = `export { ${name} } from '${writable}'`;
      fs.appendFileSync(filepath, `${libraryExport}\n`);
      return;
    });
  }
});
