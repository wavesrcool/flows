/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FlowsFunctionsDatabaseConnectionAccounts,
  FlowsFunctionsDatabaseSeed,
} from "@wavesrcool/flows-functions";
import { FlowsIoAccounts } from "@wavesrcool/flows-io";
import { FlowsModelsAccountCreateInput } from "@wavesrcool/flows-models";
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

  public async seed(input: FlowsModelsAccountCreateInput): Promise<boolean> {
    const seed = FlowsFunctionsDatabaseSeed({
      connection: this.connection,
      input,
    });

    return seed;
  }
}
