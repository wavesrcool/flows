/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsFunctionsDatabaseConnectionKeys } from "@wavesrcool/flows-functions";
import { FlowsIoKeys } from "@wavesrcool/flows-io";

export class FlowsCoreKeys {
  private dbconnection: ReturnType<typeof FlowsFunctionsDatabaseConnectionKeys>;

  constructor() {
    const dbconnection = FlowsFunctionsDatabaseConnectionKeys();
    this.dbconnection = dbconnection;
  }

  public get connection() {
    return this.dbconnection;
  }

  public async start() {
    FlowsIoKeys({ connection: this.dbconnection })
      .then(() => {
        console.log(`[flows]: Complete. Keys.`);
      })
      .catch((e: any) => {
        console.log(`[flows]: Error. Keys. ${String(e)}`);
      });
  }
}
