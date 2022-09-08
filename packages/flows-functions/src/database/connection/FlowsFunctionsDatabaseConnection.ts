import {
  FlowsModelsAccount,
  FlowsModelsEmailAddress,
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSourceOptions } from "typeorm";

export type TypesFiguresFlowsFunctionsDatabaseConnection = {
  migrations: DataSourceOptions["migrations"];
};

export const FlowsFunctionsDatabaseConnection = ({
  migrations,
}: TypesFiguresFlowsFunctionsDatabaseConnection): DataSourceOptions => {
  const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;

  if (!url) {
    throw new Error(
      `[flows-database] Error. FlowsFunctionsDatabaseConnection. process.env.FLOWS_GLOBAL_POSTGRES_URL`
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

  return options;
};
