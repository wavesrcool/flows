/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoKeys } from "@wavesrcool/flows-io";
import { TypesFiguresFlowsIoKeys } from "@wavesrcool/flows-io/bin/keys/FlowsIoKeys";

export class FlowsCoreIoKeys {
  private ioKeysFigure: TypesFiguresFlowsIoKeys;

  constructor(figure: TypesFiguresFlowsIoKeys) {
    this.ioKeysFigure = figure;
  }

  public async start() {
    FlowsIoKeys(this.ioKeysFigure)
      .then(() => {
        console.log(`[flows-core] Running. Keys.`);
      })
      .catch((e: any) => {
        console.log(`[flows-core] Error. Keys. ${String(e)}`);
      });
  }
}
