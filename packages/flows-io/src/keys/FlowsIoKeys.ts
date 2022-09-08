import express from "express";
import cors from "cors";
import helmet from "helmet";
import { routes } from "./routes/routes";
import { TypesFiguresFlowsIoKeys } from "./TypesFiguresFlowsIoKeys";

export const FlowsIoKeys = async ({
  env,
  corsOrigin,
  port,
}: TypesFiguresFlowsIoKeys): Promise<typeof app> => {
  const PROD = env === "production";

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

  console.log(`publish`);

  app.listen(port, (): void => {
    console.log(`[flow-keys] (env) ${env}`);
    console.log(`[flow-keys] (port) ${port}`);
  });

  return app;
};
