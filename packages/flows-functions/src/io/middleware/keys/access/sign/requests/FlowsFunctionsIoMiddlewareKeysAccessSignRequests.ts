/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessSignRequests: RequestHandler =
  (req, res, next): ReturnType<RequestHandler> => {
    try {
      const xFlowsAccount = req.headers["x-flows-account"];
      if (!(xFlowsAccount && typeof xFlowsAccount === "string")) {
        res.status(400).send({ error: "x-flows-account" });
        return;
      }

      const xFlowsRefresh = req.headers["x-flows-refresh"];
      if (!(xFlowsRefresh && typeof xFlowsRefresh === "string")) {
        res.status(400).send({ error: "x-flows-refresh" });
        return;
      }

      // 1. lookup account
      // 2. validate refresh token

      // set locals
      res.locals.xFlowsAccount = xFlowsAccount;
      res.locals.xFlowsRefresh = xFlowsRefresh;

      next();
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessSignRequests");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareKeysAccessSignRequests",
      });
    }
  };
