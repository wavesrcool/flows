/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowsIoKeys } from "@wavesrcool/flows-io";
import { FlowsTypesIoKeysFigure } from "@wavesrcool/flows-types";

export class FlowsCoreIoKeys {
  private ioKeysFigure: FlowsTypesIoKeysFigure;

  constructor(figure: FlowsTypesIoKeysFigure) {
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
