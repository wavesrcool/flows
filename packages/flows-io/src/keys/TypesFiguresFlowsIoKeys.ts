import { FlowsFunctionsDatabaseConnection } from "@wavesrcool/flows-functions";

export type TypesFiguresFlowsIoKeys = {
  env: string;
  corsOrigin: string;
  port: string;
  dataSource: ReturnType<typeof FlowsFunctionsDatabaseConnection>;
};
