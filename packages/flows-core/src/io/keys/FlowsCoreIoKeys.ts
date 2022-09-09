/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsIoKeys, TypesFiguresFlowsIoKeys } from "@wavesrcool/flows-io";

export class FlowsCoreIoKeys {
  private ioApiFigure: TypesFiguresFlowsIoKeys;

  constructor(figure: TypesFiguresFlowsIoKeys) {
    this.ioApiFigure = figure;
  }

  public async start() {
    FlowsIoKeys(this.ioApiFigure)
      .then(() => {
        console.log(`[flows]: Started. Keys.`);
      })
      .catch((e: any) => {
        console.log(`[flows]: Error. Keys. ${String(e)}`);
      });
  }
}
