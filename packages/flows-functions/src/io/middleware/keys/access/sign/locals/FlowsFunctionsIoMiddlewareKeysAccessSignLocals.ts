/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessSignLocals: RequestHandler = (
  _req,
  res,
  next
): ReturnType<RequestHandler> => {
  try {
    const { keysSignAccount, keysSignPassword } = res.locals;

    if (!(keysSignAccount && typeof keysSignAccount === "string")) {
      res.status(400).send({ error: "locals-keysSignAccount" });
      return;
    }

    if (!(keysSignPassword && typeof keysSignPassword === "string")) {
      res.status(400).send({ error: "locals-keysSignPassword" });
      return;
    }

    next();
  } catch (e) {
    console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessSignLocals");
    res.status(404).send({
      error: "FlowsFunctionsIoMiddlewareKeysAccessSignLocals",
    });
  }
};
