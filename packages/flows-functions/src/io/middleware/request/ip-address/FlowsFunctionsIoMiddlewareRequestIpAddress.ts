/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { RequestHandler } from "express";

export const FlowsFunctionsIoMiddlewareRequestIpAddress: RequestHandler = (
  req,
  res,
  next
) => {
  const { ip: ip0 } = req;
  const ipl = ip0.split(":");
  let ip: string;
  if (ipl.length === 1) {
    ip = ip0;
  } else {
    ipl.pop();
    ip = ipl.join();
  }

  if (ip && ip.split(".").length === 4) {
    res.locals.ipAddress = ip;
    next();
    return;
  }

  res.locals.ipAddress = `127.0.0.1`;
  next();
  return;
};
