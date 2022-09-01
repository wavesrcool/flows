import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount: RequestHandler =
  (_req, res, next) => {
    const { xFlowAccount } = res.locals;

    if (xFlowAccount && typeof xFlowAccount === "string") {
      next();
      return;
    }

    res.status(404).send({ error: "response-locals-xFlowAccount" });
  };
