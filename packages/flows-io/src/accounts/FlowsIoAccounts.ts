import express from "express";
import cors from "cors";
import helmet from "helmet";
import { routes } from "./routes/routes";
import { TypesFiguresFlowsIoAccounts } from "./TypesFiguresFlowsIoAccounts";

export const FlowsIoAccounts = async ({
  env,
  corsOrigin,
  port,
  datasource,
}: TypesFiguresFlowsIoAccounts): Promise<typeof app> => {
  const PROD = env === "production";

  console.log(!!datasource);

  /*
  await datasource.initialize().then(async () => {
    console.log("[flow-accounts] Database initialization complete.");
  })

  */
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
