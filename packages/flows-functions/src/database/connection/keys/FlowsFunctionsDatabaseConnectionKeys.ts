import { DataSource, DataSourceOptions } from "typeorm";
import { FlowsFunctionsDatabaseUrl } from "../../url/FlowsFunctionsDatabaseUrl";

export const FlowsFunctionsDatabaseConnectionKeys = (): DataSource => {
  const url = FlowsFunctionsDatabaseUrl();

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
