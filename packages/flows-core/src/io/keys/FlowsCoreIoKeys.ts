/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoKeys, TypesFiguresFlowsIoKeys } from "@wavesrcool/flows-io";

export class FlowsCoreIoKeys {
  private ioKeysFigure: TypesFiguresFlowsIoKeys;

  constructor(figure: TypesFiguresFlowsIoKeys) {
    console.log(`publish`);
    this.ioKeysFigure = figure;
  }

  public async start() {
    FlowsIoKeys(this.ioKeysFigure)
      .then(() => {
        console.log(`[flows-core] Running. IoKeys.`);
      })
      .catch((e: any) => {
        console.log(`[flows-core] Error. IoKeys. ${String(e)}`);
      });
  }
}
