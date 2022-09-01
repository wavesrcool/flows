import express from "express";
import cors from "cors";
import helmet from "helmet";
import { FlowsTypesIoSimpleFigure } from "@wavesrcool/flows-types";
import { routes } from "./routes/routes";

export const FlowsIoSimple = async ({
  env,
  corsOrigin,
  port,
}: FlowsTypesIoSimpleFigure): Promise<typeof app> => {
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
    console.log(`[flow-io] (env) ${env}`);
    console.log(`[flow-io] (port) ${port}`);
  });

  return app;
};
