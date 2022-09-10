import cors from "cors";
import express from "express";
import helmet from "helmet";
import { TypesResolveFlowsFunctionsIoInstancesAccounts } from "./TypesResolveFlowsFunctionsIoInstancesAccounts";

export const FlowsFunctionsIoInstancesAccounts =
  (): TypesResolveFlowsFunctionsIoInstancesAccounts => {
    const PROD = process.env.NODE_ENV === "production";
    const CORS_ORIGIN = process.env.FLOWS_LOCAL_CORS_ORIGIN;

    const app = express();
    app.use(helmet());
    app.use(express.json());

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
