/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests: RequestHandler =
  (req, res, next): ReturnType<RequestHandler> => {
    try {
      const xFlowsAccess = req.headers["x-flows-access"];
      if (!(xFlowsAccess && typeof xFlowsAccess === "string")) {
        res.status(400).send({ error: "x-flows-access" });
        return;
      }

      // set locals
      res.locals.xFlowsAccess = xFlowsAccess;

      next();
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests",
      });
    }
  };
