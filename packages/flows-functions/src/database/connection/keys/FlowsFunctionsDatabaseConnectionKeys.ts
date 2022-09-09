import { DataSource, DataSourceOptions } from "typeorm";

export const FlowsFunctionsDatabaseConnectionKeys = (): DataSource => {
  const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;

  if (!url) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsDatabaseConnectionKeys. process.env.FLOWS_GLOBAL_POSTGRES_URL`
    );
  }

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
