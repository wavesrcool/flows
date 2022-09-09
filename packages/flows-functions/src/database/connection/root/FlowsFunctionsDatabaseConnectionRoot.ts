import {
  FlowsModelsAccount,
  FlowsModelsEmailAddress,
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource, DataSourceOptions } from "typeorm";
import { FlowsFunctionsDatabaseUrl } from "../../url/FlowsFunctionsDatabaseUrl";
import { TypesFiguresFlowsFunctionsDatabaseConnectionRoot } from "./TypesFiguresFlowsFunctionsDatabaseConnectionRoot";

export const FlowsFunctionsDatabaseConnectionRoot = ({
  migrations,
}: TypesFiguresFlowsFunctionsDatabaseConnectionRoot): DataSource => {
  const url = FlowsFunctionsDatabaseUrl();

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
