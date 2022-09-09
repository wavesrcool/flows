import {
  FlowsFunctionsIoMiddlewareAllLocals,
  FlowsFunctionsIoMiddlewareAllRequests,
} from "@wavesrcool/flows-functions";

export const middleware = {
  all: {
    requests: FlowsFunctionsIoMiddlewareAllRequests,
    locals: FlowsFunctionsIoMiddlewareAllLocals,
  },
};
