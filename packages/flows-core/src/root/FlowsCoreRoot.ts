/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsFunctionsDatabaseConnectionRoot } from "@wavesrcool/flows-functions";
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
}
