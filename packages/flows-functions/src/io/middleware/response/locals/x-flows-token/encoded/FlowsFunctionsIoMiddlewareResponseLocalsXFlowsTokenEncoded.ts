import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsTokenEncoded: RequestHandler =
  (_req, res, next) => {
    const { xFlowTokenEncoded } = res.locals;

    if (xFlowTokenEncoded && typeof xFlowTokenEncoded === "string") {
      next();
      return;
    }

    res.status(404).send({ error: "response-locals-xFlowTokenEncoded" });
  };
