/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessSignLocals: RequestHandler = (
  _req,
  res,
  next
): ReturnType<RequestHandler> => {
  try {
    const { xFlowsAccount, xFlowsRefresh } = res.locals;

    if (!(xFlowsAccount && typeof xFlowsAccount === "string")) {
      res.status(400).send({ error: "locals-xFlowsAccount" });
      return;
    }

    if (!(xFlowsRefresh && typeof xFlowsRefresh === "string")) {
      res.status(400).send({ error: "locals-xFlowsRefresh" });
      return;
    }

    next();
  } catch (e) {
    console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessSignLocals");
    res.status(404).send({
      error: "FlowsFunctionsIoMiddlewareKeysAccessSignLocals",
    });
  }
};
