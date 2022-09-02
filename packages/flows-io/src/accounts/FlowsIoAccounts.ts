import express from "express";
import cors from "cors";
import helmet from "helmet";
import { FlowsTypesIoAccountsFigure } from "@wavesrcool/flows-types";
import { FlowsFunctionsDatabasePostgresqlDataSource } from "@wavesrcool/flows-functions";
import { routes } from "./routes/routes";

export const FlowsIoAccounts = async ({
  env,
  corsOrigin,
  port,
}: FlowsTypesIoAccountsFigure): Promise<typeof app> => {
  const PROD = env === "production";

  const cwd = process.cwd();

  console.log(cwd, `cwd`);

  const fig = {
    migrations: [""], // @tmp
  };

  const datasource = FlowsFunctionsDatabasePostgresqlDataSource(fig);

  await datasource.initialize().then(async () => {
    console.log("[flow-accounts] Database initialization complete.");
  });

  const app = express();
  app.use(helmet());

  if (PROD) {
    app.set("trust proxy", 1);
  }

  const corsOptions: cors.CorsOptions = {
    origin: corsOrigin,
    credentials: true,
  };
  app.use(cors(corsOptions));

  routes(app);

  app.listen(port, (): void => {
    console.log(`[flow-accounts] (env) ${env}`);
    console.log(`[flow-accounts] (port) ${port}`);
  });

  return app;
};
