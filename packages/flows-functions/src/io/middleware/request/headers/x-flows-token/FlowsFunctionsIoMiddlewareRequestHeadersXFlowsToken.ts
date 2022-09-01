/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";
import { FlowsFunctionsJwtVerify } from "../../../../../jwt/verify/FlowsFunctionsJwtVerify";

export const FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken: RequestHandler =
  async (req, res, next): Promise<ReturnType<RequestHandler>> => {
    try {
      const routesUnsecured = process.env.FLOWS_GLOBAL_ROUTES_UNSECURED;

      if (routesUnsecured && typeof routesUnsecured === "string") {
        const unsecuredRoutes = String(routesUnsecured).split(",");

        if (unsecuredRoutes.includes(req.path)) {
          next();
          return;
        }

        const xFlowsToken = req.headers["x-flows-token"];

        if (xFlowsToken && typeof xFlowsToken === "string") {
          const secretEncryption = process.env.FLOWS_KEYS_SECRET_ENCRYPTION;

          if (!secretEncryption || !(typeof secretEncryption === "string")) {
            res.status(400).send({ error: "keys-sign-secretEncryption" });
            return;
          }

          const secretJwt = process.env.FLOWS_KEYS_SECRET_JWT;

          if (!secretJwt || !(typeof secretJwt === "string")) {
            res.status(400).send({ error: "keys-sign-secretJwt" });
            return;
          }

          const secretHash = process.env.FLOWS_KEYS_SECRET_HASH;

          if (!secretHash || !(typeof secretHash === "string")) {
            res.status(400).send({ error: "keys-sign-secretHash" });
            return;
          }

          const {
            complete: jwtVerifyComplete,
            message: jwtVerifyMessage,
            records: jwtVerifyRecords,
          } = await FlowsFunctionsJwtVerify({
            encoded: xFlowsToken,
            secretEncryption,
            secretJwt,
            secretHash,
          });

          if (jwtVerifyComplete && !jwtVerifyMessage && jwtVerifyRecords) {
            res.locals.xFlowTokenRecords = jwtVerifyRecords;
            res.locals.xFlowTokenEncoded = xFlowsToken;
            next();
          } else {
            res.status(404).send({ error: "x-flow-token" });
          }

          res.locals.xFlowAccount = xFlowsToken;
          next();
          return;
        }

        res.status(404).send({ error: "x-flow-account" });
        return;
      }
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken");
      res.status(400).send({
        error: "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken",
      });
    }
  };
