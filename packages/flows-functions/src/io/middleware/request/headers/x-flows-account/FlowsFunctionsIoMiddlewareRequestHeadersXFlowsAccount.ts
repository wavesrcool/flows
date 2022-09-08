/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount: RequestHandler =
  (req, res, next): ReturnType<RequestHandler> => {
    try {
      const routesUnsecured = process.env.FLOWS_LOCAL_ROUTES_UNSECURED;
      if (routesUnsecured && typeof routesUnsecured === "string") {
        const routesUnsecuredList = String(routesUnsecured).split(",");
        if (
          routesUnsecuredList &&
          routesUnsecuredList.length &&
          routesUnsecuredList.includes(req.path)
        ) {
          next();
          return;
        }

        const xFlowsAccount = req.headers["x-flows-account"];
        if (xFlowsAccount && typeof xFlowsAccount === "string") {
          res.locals.xFlowsAccount = xFlowsAccount;
          next();
          return;
        }
      }
      res.status(400).send({ error: "x-flows-account" });
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount",
      });
    }
  };
