/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FlowsIoAccounts,
  TypesFiguresFlowsIoAccounts,
} from "@wavesrcool/flows-io";

export class FlowsCoreIoAccounts {
  private ioAccountsFigure: TypesFiguresFlowsIoAccounts;

  constructor(figure: TypesFiguresFlowsIoAccounts) {
    this.ioAccountsFigure = figure;
  }

  public async start() {
    FlowsIoAccounts(this.ioAccountsFigure)
      .then(() => {
        console.log(`[flows-core] Running. IoAccounts.`);
      })
      .catch((e: any) => {
        console.log(`[flows-core] Error. IoAccounts. ${String(e)}`);
      });
  }
}
