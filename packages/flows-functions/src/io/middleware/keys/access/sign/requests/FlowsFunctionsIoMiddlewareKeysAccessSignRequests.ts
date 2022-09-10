/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareKeysAccessSignRequests: RequestHandler =
  (req, res, next): ReturnType<RequestHandler> => {
    try {
      const { body } = req;

      if (!body) {
        res.status(400).send({ error: "request body undefined" });
        return;
      }

      const { account, password } = body;

      if (!(account && typeof account === "string")) {
        res.status(400).send({ error: "request body account undefined" });
        return;
      }

      if (!(password && typeof password === "string")) {
        res.status(400).send({ error: "request body password undefined" });
        return;
      }

      // set locals

      console.log(account, `acct`);
      console.log(password, `pass`);

      res.locals.keysSignAccount = account;
      res.locals.keysSignPassword = password;

      next();
    } catch (e) {
      console.log(e, "FlowsFunctionsIoMiddlewareKeysAccessSignRequests");
      res.status(404).send({
        error: "FlowsFunctionsIoMiddlewareKeysAccessSignRequests",
      });
    }
  };
