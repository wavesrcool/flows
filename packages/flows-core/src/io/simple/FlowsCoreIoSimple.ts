/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoSimple } from "@wavesrcool/flows-io";
import { TypesFiguresFlowsIoSimple } from "@wavesrcool/flows-io/bin/simple/FlowsIoSimple";

export class FlowsCoreIoSimple {
  private ioSimpleFigure: TypesFiguresFlowsIoSimple;

  constructor(figure: TypesFiguresFlowsIoSimple) {
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
