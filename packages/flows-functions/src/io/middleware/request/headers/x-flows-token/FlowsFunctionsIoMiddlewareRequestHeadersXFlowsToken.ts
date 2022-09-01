/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";
import { FlowsFunctionsJwtVerify } from "../../../../../jwt/verify/FlowsFunctionsJwtVerify";

export const FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken: RequestHandler =
  async (req, res, next): Promise<ReturnType<RequestHandler>> => {
    try {
      const routesUnsecured = process.env.FLOWS_GLOBAL_ROUTES_UNSECURED;
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

        const xFlowsToken = req.headers["x-flows-token"];
        if (xFlowsToken && typeof xFlowsToken === "string") {
          const {
            complete: jwtVerifyComplete,
            message: jwtVerifyMessage,
            records: jwtVerifyRecords,
          } = await FlowsFunctionsJwtVerify({
            encoded: xFlowsToken,
          });

          if (jwtVerifyComplete && !jwtVerifyMessage && jwtVerifyRecords) {
            res.locals.xFlowsTokenRecords = jwtVerifyRecords;
            res.locals.xFlowsTokenEncoded = xFlowsToken;
            next();
            return;
          }
        }
      }
      res.status(400).send({ error: "x-flows-token" });
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken",
      });
    }
  };
