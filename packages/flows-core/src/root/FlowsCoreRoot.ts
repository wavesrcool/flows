/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsFunctionsDatabaseConnectionRoot } from "@wavesrcool/flows-functions";
import { FlowsIoRoot } from "@wavesrcool/flows-io";
import { TypesFiguresFlowsCoreRoot } from "./TypesFiguresFlowsCoreRoot";

export class FlowsCoreRoot {
  private dbConnectionRoot: ReturnType<
    typeof FlowsFunctionsDatabaseConnectionRoot
  >;

  constructor(figure: TypesFiguresFlowsCoreRoot) {
    const dbConnectionRoot = FlowsFunctionsDatabaseConnectionRoot(
      figure.figureDatabaseConnection
    );
    this.dbConnectionRoot = dbConnectionRoot;
  }

  public get connection() {
    return this.dbConnectionRoot;
  }

  public async start() {
    FlowsIoRoot({ connection: this.dbConnectionRoot })
      .then(() => {
        console.log(`[flows]: Complete. Root.`);
      })
      .catch((e: any) => {
        console.log(`[flows]: Error. Root. ${String(e)}`);
      });
  }
}
