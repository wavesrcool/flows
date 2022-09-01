import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount: RequestHandler =
  (_req, res, next) => {
    const { xFlowsAccount } = res.locals;

    if (xFlowsAccount && typeof xFlowsAccount === "string") {
      next();
      return;
    }

    res.status(404).send({ error: "response-locals-xFlowsAccount" });
  };
