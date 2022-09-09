import {
  FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess,
  FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount,
  FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken,
  FlowsFunctionsIoMiddlewareRequestIpAddress,
  FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
  FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount,
} from "@wavesrcool/flows-functions";

export const middleware = {
  request: {
    headers: {
      xFlowsAccess: FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess,
      xFlowsAccount: FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount,
      xFlowsToken: FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken,
    },
    ipAddress: FlowsFunctionsIoMiddlewareRequestIpAddress,
  },
  response: {
    locals: {
      ipAddress: FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
      xFlowsAccount: FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount,
    },
  },
};
