/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsFunctionsDatabaseConnectionAccounts } from "@wavesrcool/flows-functions";
import { FlowsIoAccounts } from "@wavesrcool/flows-io";
import { TypesFiguresFlowsCoreAccounts } from "./TypesFiguresFlowsCoreAccounts";

export class FlowsCoreAccounts {
  private dbconnection: ReturnType<
    typeof FlowsFunctionsDatabaseConnectionAccounts
  >;

  constructor(figure: TypesFiguresFlowsCoreAccounts) {
    const dbconnection = FlowsFunctionsDatabaseConnectionAccounts(
      figure.figureDatabaseConnection
    );
    this.dbconnection = dbconnection;
  }

  public get connection() {
    return this.dbconnection;
  }

  public async start() {
    FlowsIoAccounts({ connection: this.connection })
      .then(() => {
        console.log(`[flows]: Complete. Root.`);
      })
      .catch((e: any) => {
        console.log(`[flows]: Error. Root. ${String(e)}`);
      });
  }
}
