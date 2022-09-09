import {
  FlowsModelsAccount,
  FlowsModelsEmailAddress,
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource, DataSourceOptions } from "typeorm";
import { FlowsFunctionsEnvironmentGlobalPostgresUrl } from "../../../environment/global-postgres-url/FlowsFunctionsEnvironmentGlobalPostgresUrl";
import { TypesFiguresFlowsFunctionsDatabaseConnectionAccounts } from "./TypesFiguresFlowsFunctionsDatabaseConnectionAccounts";

export const FlowsFunctionsDatabaseConnectionAccounts = ({
  migrations,
}: TypesFiguresFlowsFunctionsDatabaseConnectionAccounts): DataSource => {
  const url = FlowsFunctionsEnvironmentGlobalPostgresUrl();

  const options: DataSourceOptions = {
    name: "default",
    type: "postgres",
    url,
    synchronize: false,
    logging: !(process.env.NODE_ENV === `production`),
    subscribers: [],
    dropSchema: false,
    entities: [
      FlowsModelsAccount,
      FlowsModelsEmailAddress,
      FlowsModelsEmailLocal,
      FlowsModelsEmailMessage,
    ],
    migrations,
    migrationsRun: true,
    migrationsTableName: "history",
    ssl: true,
  };

  const connection = new DataSource(options);
  return connection;
};
