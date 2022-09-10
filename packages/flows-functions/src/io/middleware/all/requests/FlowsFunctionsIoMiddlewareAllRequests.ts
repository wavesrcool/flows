/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";
import { FlowsFunctionsEnvironmentGlobalXFlowsCredential } from "../../../../environment/global-x-flows-credential/FlowsFunctionsEnvironmentGlobalXFlowsCredential";
import { FlowsFunctionsEnvironmentLocalRoutesUnsecured } from "../../../../environment/local-routes-unsecured/FlowsFunctionsEnvironmentLocalRoutesUnsecured";

export const FlowsFunctionsIoMiddlewareAllRequests: RequestHandler = (
  req,
  res,
  next
): ReturnType<RequestHandler> => {
  try {
    const routesUnsecured = FlowsFunctionsEnvironmentLocalRoutesUnsecured();
    const { ip: ip0 } = req;
    const iplist = ip0.split(":");
    let ip: string;

    if (iplist.length === 1) {
      ip = ip0;
    } else {
      iplist.pop();
      ip = iplist.join();
    }

    let ipAddress = "127.0.0.1";
    if (ip && ip.split(".").length === 4) {
      ipAddress = ip;
    }
    res.locals.ipAddress = ipAddress;

    const routesUnsecuredList = String(routesUnsecured).split(",");

    if (
      routesUnsecuredList &&
      routesUnsecuredList.length &&
      routesUnsecuredList.includes(req.path)
    ) {
      next();
      return;
    }

    const xFlowsCredential = req.headers["x-flows-credential"];
    if (!(xFlowsCredential && typeof xFlowsCredential === "string")) {
      res.status(400).send({ error: "x-flows-credential" });
      return;
    }

    const credential = FlowsFunctionsEnvironmentGlobalXFlowsCredential();
    if (!(xFlowsCredential === credential)) {
      res.status(400).send({ error: "flows credential invalidated" });
      return;
    }

    next();
  } catch (e) {
    console.log(e, "FlowsFunctionsIoMiddlewareAllRequests");
    res.status(404).send({
      error: "FlowsFunctionsIoMiddlewareAllRequests",
    });
  }
};
