/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessVerifyLocals: RequestHandler =
  (_req, res, next): ReturnType<RequestHandler> => {
    try {
      const { xFlowsKey } = res.locals;

      if (!(xFlowsKey && typeof xFlowsKey === "string")) {
        res.status(400).send({ error: "locals-xFlowsKey" });
        return;
      }

      next();
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessVerifyLocals");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareKeysAccessVerifyLocals",
      });
    }
  };
