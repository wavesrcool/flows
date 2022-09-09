/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";
import { FlowsFunctionsEnvironmentGlobalXFlowsAccess } from "../../../../environment/global-x-flows-access/FlowsFunctionsEnvironmentGlobalXFlowsAccess";
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

    const xFlowsAccess = req.headers["x-flows-access"];
    if (!(xFlowsAccess && typeof xFlowsAccess === "string")) {
      res.status(400).send({ error: "x-flows-access" });
      return;
    }

    const access = FlowsFunctionsEnvironmentGlobalXFlowsAccess();
    if (!(xFlowsAccess === access)) {
      res.status(400).send({ error: "access invalidated" });
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
