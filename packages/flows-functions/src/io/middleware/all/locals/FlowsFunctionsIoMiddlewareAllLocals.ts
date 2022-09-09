/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareAllLocals: RequestHandler = (
  _req,
  res,
  next
): ReturnType<RequestHandler> => {
  try {
    const { ipAddress } = res.locals;

    if (!(ipAddress && typeof ipAddress === "string")) {
      res.status(400).send({ error: "locals-ipAddress" });
      return;
    }

    next();
  } catch (e) {
    console.log(e, "FlowsFunctionsIoMiddlewareAllLocals");
    res.status(404).send({
      error: "FlowsFunctionsIoMiddlewareAllLocals",
    });
  }
};
