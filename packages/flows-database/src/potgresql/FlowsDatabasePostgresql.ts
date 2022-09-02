import { DataSource, DataSourceOptions } from "typeorm";

const logging = !(process.env.NODE_ENV === `production`);

const url = process.env.POSTGRES_URL;

if (!url) {
  throw new Error(`[flows-database] Error. process.env.POSTGRES_URL`);
}

const options: DataSourceOptions = {
  name: "default",
  type: "postgres",
  url,
  synchronize: false,
  logging,
  subscribers: [],
  dropSchema: false,
  entities: [`bin/database/entities/**/*.js`],
  migrations: [`bin/database/migrations/*.js`],
  migrationsRun: true,
  migrationsTableName: "history",
  ssl: true,
};

export const FlowsDatabasePostgresql = new DataSource(options);
