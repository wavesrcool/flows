/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsFunctionsDatabaseConnectionKeys } from "@wavesrcool/flows-functions";
import { FlowsIoKeys } from "@wavesrcool/flows-io";

export class FlowsCoreKeys {
  private dbConnectionKeys: ReturnType<
    typeof FlowsFunctionsDatabaseConnectionKeys
  >;

  constructor() {
    const dbConnectionKeys = FlowsFunctionsDatabaseConnectionKeys();
    this.dbConnectionKeys = dbConnectionKeys;
  }

  public get connection() {
    return this.dbConnectionKeys;
  }

  public async start() {
    FlowsIoKeys({ connection: this.dbConnectionKeys })
      .then(() => {
        console.log(`[flows]: Complete. Keys.`);
      })
      .catch((e: any) => {
        console.log(`[flows]: Error. Keys. ${String(e)}`);
      });
  }
}
