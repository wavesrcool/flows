import {
  FlowsFunctionsIoMiddlewareAllLocals,
  FlowsFunctionsIoMiddlewareAllRequests,
  FlowsFunctionsIoMiddlewareKeysAccessSignLocals,
  FlowsFunctionsIoMiddlewareKeysAccessSignRequests,
  FlowsFunctionsIoMiddlewareKeysAccessVerifyLocals,
  FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests,
} from "@wavesrcool/flows-functions";

export const middleware = {
  all: {
    requests: FlowsFunctionsIoMiddlewareAllRequests,
    locals: FlowsFunctionsIoMiddlewareAllLocals,
  },
  keys: {
    access: {
      sign: {
        requests: FlowsFunctionsIoMiddlewareKeysAccessSignRequests,
        locals: FlowsFunctionsIoMiddlewareKeysAccessSignLocals,
      },
      verify: {
        requests: FlowsFunctionsIoMiddlewareKeysAccessVerifyRequests,
        locals: FlowsFunctionsIoMiddlewareKeysAccessVerifyLocals,
      },
    },
  },
};
