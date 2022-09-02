/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoAccounts } from "@wavesrcool/flows-io";
import { FlowsTypesIoAccountsFigure } from "@wavesrcool/flows-types";

export class FlowsCoreIoAccounts {
  private ioAccountsFigure: FlowsTypesIoAccountsFigure;

  constructor(figure: FlowsTypesIoAccountsFigure) {
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
