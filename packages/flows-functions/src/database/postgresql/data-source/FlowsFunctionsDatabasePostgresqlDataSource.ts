import {
  FlowsModelsAccount,
  FlowsModelsEmailAddress,
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource, DataSourceOptions } from "typeorm";

export type TypesFiguresFlowsFunctionsDatabasePostgresqlDataSource = {
  migrations: DataSourceOptions["migrations"];
};

export const FlowsFunctionsDatabasePostgresqlDataSource = ({
  migrations,
}: TypesFiguresFlowsFunctionsDatabasePostgresqlDataSource): DataSource => {
  const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;

  if (!url) {
    throw new Error(
      `[flows-database] Error. FlowsFunctionsDatabasePostgresqlDataSource. process.env.FLOWS_GLOBAL_POSTGRES_URL`
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

  const ds = new DataSource(options);
  return ds;
};
