import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess: RequestHandler =
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
        const xFlowsAccess = req.headers["x-flows-access"];
        if (
          xFlowsAccess &&
          typeof xFlowsAccess === "string" &&
          xFlowsAccess === process.env.FLOW_GLOBAL_X_FLOW_ACCESS
        ) {
          next();
          return;
        }
      }
      res.status(400).send({ error: "x-flows-access" });
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess",
      });
    }
  };
