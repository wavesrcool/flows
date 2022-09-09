import {
  FlowsModelsAccount,
  FlowsModelsEmailAddress,
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource, DataSourceOptions } from "typeorm";
import { TypesFiguresFlowsFunctionsDatabaseConnectionApi } from "./TypesFiguresFlowsFunctionsDatabaseConnectionApi";

export const FlowsFunctionsDatabaseConnectionApi = ({
  migrations,
}: TypesFiguresFlowsFunctionsDatabaseConnectionApi): DataSource => {
  const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;

  if (!url) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsDatabaseConnectionApi. process.env.FLOWS_GLOBAL_POSTGRES_URL`
    );
  }

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
