/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoSimple } from "@wavesrcool/flows-io";
import { FlowsTypesIoSimpleFigure } from "@wavesrcool/flows-types";

export class FlowsCoreIoSimple {
  private ioSimpleFigure: FlowsTypesIoSimpleFigure;

  constructor(figure: FlowsTypesIoSimpleFigure) {
    this.ioSimpleFigure = figure;
  }

  public async start() {
    FlowsIoSimple(this.ioSimpleFigure)
      .then(() => {
        console.log(`[flows-core] Running. Simple.`);
      })
      .catch((e: any) => {
        console.log(`[flows-core] Error. Simple. ${String(e)}`);
      });
  }
}
