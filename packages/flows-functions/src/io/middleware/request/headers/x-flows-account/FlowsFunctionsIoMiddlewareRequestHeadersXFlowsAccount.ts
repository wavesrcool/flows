/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount: RequestHandler =
  (req, res, next): ReturnType<RequestHandler> => {
    try {
      const routesUnsecured = process.env.FLOWS_GLOBAL_ROUTES_UNSECURED;

      if (routesUnsecured && typeof routesUnsecured === "string") {
        const unsecuredRoutes = String(routesUnsecured).split(",");

        if (unsecuredRoutes.includes(req.path)) {
          next();
        }
        const xFlowsAccount = req.headers["x-flows-accounts"];

        if (xFlowsAccount && typeof xFlowsAccount === "string") {
          res.locals.xFlowAccount = xFlowsAccount;
          next();
        }

        res.status(404).send({ error: "x-flow-account" });
      }
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount");
      res.status(400).send({
        error: "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount",
      });
    }
  };
