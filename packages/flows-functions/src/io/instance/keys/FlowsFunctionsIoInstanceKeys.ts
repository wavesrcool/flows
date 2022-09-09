import cors from "cors";
import express from "express";
import helmet from "helmet";
import { TypesResolveFlowsFunctionsIoInstanceKeys } from "./TypesResolveFlowsFunctionsIoInstanceKeys";

export const FlowsFunctionsIoInstanceKeys =
  (): TypesResolveFlowsFunctionsIoInstanceKeys => {
    const PROD = process.env.NODE_ENV === "production";
    const CORS_ORIGIN = process.env.FLOWS_LOCAL_CORS_ORIGIN;

    const app = express();
    app.use(helmet());

    if (PROD) {
      app.set("trust proxy", 1);
    }

    const corsOptions: cors.CorsOptions = {
      origin: CORS_ORIGIN,
      credentials: true,
    };
    app.use(cors(corsOptions));

    const router = express.Router();

    return { app, router };
  };
