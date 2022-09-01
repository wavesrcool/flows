import express from "express";
import cors from "cors";
import helmet from "helmet";
import { FlowsTypesIoKeysFigure } from "@wavesrcool/flows-types";
import { routes } from "./routes/routes";

export const FlowsIoKeys = async ({
  env,
  corsOrigin,
  port,
}: FlowsTypesIoKeysFigure): Promise<typeof app> => {
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

  app.listen(port, (): void => {
    console.log(`[flow-keys] (env) ${env}`);
    console.log(`[flow-keys] (port) ${port}`);
  });

  return app;
};
