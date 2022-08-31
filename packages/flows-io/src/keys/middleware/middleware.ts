import {
  FlowsFunctionsIoMiddlewareRequestIpAddress,
  FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
} from "@wavesrcool/flows-functions";

export const middleware = {
  request: {
    ipAddress: FlowsFunctionsIoMiddlewareRequestIpAddress,
  },
  response: {
    locals: {
      ipAddress: FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
    },
  },
};
