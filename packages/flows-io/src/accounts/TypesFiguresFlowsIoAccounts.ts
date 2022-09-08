import { FlowsFunctionsDatabasePostgresqlDataSource } from "@wavesrcool/flows-functions";

export type TypesFiguresFlowsIoAccounts = {
  env: string;
  corsOrigin: string;
  port: string;
  datasource: ReturnType<typeof FlowsFunctionsDatabasePostgresqlDataSource>;
};
