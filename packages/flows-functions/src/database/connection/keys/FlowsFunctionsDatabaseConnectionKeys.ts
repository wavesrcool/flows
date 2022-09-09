import { DataSource, DataSourceOptions } from "typeorm";
import { FlowsFunctionsEnvironmentGlobalPostgresUrl } from "../../../environment/global-postgres-url/FlowsFunctionsEnvironmentGlobalPostgresUrl";

export const FlowsFunctionsDatabaseConnectionKeys = (): DataSource => {
  const url = FlowsFunctionsEnvironmentGlobalPostgresUrl();

  const options: DataSourceOptions = {
    name: "default",
    type: "postgres",
    url,
    logging: !(process.env.NODE_ENV === `production`),
    ssl: true,
  };

  const connection = new DataSource(options);
  return connection;
};
