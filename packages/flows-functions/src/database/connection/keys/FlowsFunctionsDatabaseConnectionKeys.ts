import {
  FlowsModelsAccount,
  FlowsModelsEmailAddress,
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource, DataSourceOptions } from "typeorm";
import { FlowsFunctionsEnvironmentGlobalPostgresUrl } from "../../../environment/global-postgres-url/FlowsFunctionsEnvironmentGlobalPostgresUrl";

export const FlowsFunctionsDatabaseConnectionKeys = (): DataSource => {
  const url = FlowsFunctionsEnvironmentGlobalPostgresUrl();

  const options: DataSourceOptions = {
    ssl: true,
    name: "default",
    type: "postgres",
    url,
    logging: !(process.env.NODE_ENV === `production`),
    entities: [
      FlowsModelsAccount,
      FlowsModelsEmailAddress,
      FlowsModelsEmailLocal,
      FlowsModelsEmailMessage,
    ],
  };

  const connection = new DataSource(options);
  return connection;
};
