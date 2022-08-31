/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareResponseLocalsIpAddress: RequestHandler =
  (_req, res, next) => {
    const { ipAddress } = res.locals;

    if (ipAddress && typeof ipAddress === "string") {
      next();
      return;
    }
    res.status(404).send({ error: "response-locals-ipAddress" });
  };
