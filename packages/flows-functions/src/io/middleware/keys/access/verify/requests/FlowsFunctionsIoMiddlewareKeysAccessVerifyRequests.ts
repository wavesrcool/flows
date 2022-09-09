/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests: RequestHandler =
  (req, res, next): ReturnType<RequestHandler> => {
    try {
      const xFlowsKey = req.headers["x-flows-key"];
      if (!(xFlowsKey && typeof xFlowsKey === "string")) {
        res.status(400).send({ error: "x-flows-key" });
        return;
      }

      // set locals
      res.locals.xFlowsKey = xFlowsKey;

      next();
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests",
      });
    }
  };
