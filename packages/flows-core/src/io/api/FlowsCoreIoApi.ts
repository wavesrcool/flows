/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlowsIoApi, TypesFiguresFlowsIoApi } from "@wavesrcool/flows-io";

export class FlowsCoreIoApi {
  private ioApiFigure: TypesFiguresFlowsIoApi;

  constructor(figure: TypesFiguresFlowsIoApi) {
    this.ioApiFigure = figure;
  }

  public async start() {
    FlowsIoApi(this.ioApiFigure)
      .then(() => {
        console.log(`[flows-io]: Started. Api.`);
      })
      .catch((e: any) => {
        console.log(`[flows-io]: Error. Api. ${String(e)}`);
      });
  }
}
