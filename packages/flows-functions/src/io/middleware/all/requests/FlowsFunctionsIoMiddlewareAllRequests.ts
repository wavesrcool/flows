/* eslint-disable no-param-reassign */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareAllRequests: RequestHandler = (
  req,
  res,
  next
): ReturnType<RequestHandler> => {
  try {
    const routesUnsecured = process.env.FLOWS_LOCAL_ROUTES_UNSECURED;
    if (!routesUnsecured) {
      throw new Error(`[flows]: Error. FLOWS_LOCAL_ROUTES_UNSECURED`);
    }

    const routesUnsecuredList = String(routesUnsecured).split(",");

    console.log(routesUnsecuredList, "routesUnsecuredList");

    if (
      routesUnsecuredList &&
      routesUnsecuredList.length &&
      routesUnsecuredList.includes(req.path)
    ) {
      console.log(`[flows]: Message. Handing Unsecured route '${req.path}'.`);
      next();
      return;
    }

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

    next();
  } catch (e) {
    console.log(e, "FlowsFunctionsIoMiddlewareAllRequests");
    res.status(404).send({
      error: "FlowsFunctionsIoMiddlewareAllRequests",
    });
  }
};
