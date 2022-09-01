import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsTokenEncoded: RequestHandler =
  (_req, res, next) => {
    const { xFlowsTokenEncoded } = res.locals;

    if (xFlowsTokenEncoded && typeof xFlowsTokenEncoded === "string") {
      next();
      return;
    }

    res.status(404).send({ error: "response-locals-xFlowsTokenEncoded" });
  };
