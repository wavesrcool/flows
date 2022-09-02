/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoAccounts } from "@wavesrcool/flows-io";
import { FlowsTypesIoAccountsFigure } from "@wavesrcool/flows-types";

export class FlowsCoreIoAccounts {
  private ioSimpleFigure: FlowsTypesIoAccountsFigure;

  constructor(figure: FlowsTypesIoAccountsFigure) {
    this.ioSimpleFigure = figure;
  }

  public async start() {
    FlowsIoAccounts(this.ioSimpleFigure)
      .then(() => {
        console.log(`[flows-core] Running. Simple.`);
      })
      .catch((e: any) => {
        console.log(`[flows-core] Error. Simple. ${String(e)}`);
      });
  }
}
