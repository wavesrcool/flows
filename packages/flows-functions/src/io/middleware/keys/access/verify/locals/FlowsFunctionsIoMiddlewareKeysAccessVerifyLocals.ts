/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessVerifyLocals: RequestHandler =
  (_req, res, next): ReturnType<RequestHandler> => {
    try {
      const { xFlowsAccess } = res.locals;

      if (!(xFlowsAccess && typeof xFlowsAccess === "string")) {
        res.status(400).send({ error: "locals-xFlowsAccess" });
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
