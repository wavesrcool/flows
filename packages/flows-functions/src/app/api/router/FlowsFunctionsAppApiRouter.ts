import { Router, Express } from "express";
import {
  FlowsFunctionsIoControllersBreathe,
  FlowsFunctionsIoControllersIndexSimple,
  FlowsFunctionsIoControllersKeysAccessSign,
  FlowsFunctionsIoControllersKeysAccessVerify,
  FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess,
  FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount,
  FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken,
  FlowsFunctionsIoMiddlewareRequestIpAddress,
  FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
  FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount,
} from "packages/flows-functions/src";

const controllers = {
  index: FlowsFunctionsIoControllersIndexSimple,
  breathe: FlowsFunctionsIoControllersBreathe,
  keys: {
    access: {
      sign: FlowsFunctionsIoControllersKeysAccessSign,
      verify: FlowsFunctionsIoControllersKeysAccessVerify,
    },
  },
};

const middleware = {
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

const router = Router();

export type TypesFiguresFlowsFunctionsAppApiRouter = {
  app: Express;
};
export const FlowsFunctionsAppApiRouter = ({
  app,
}: TypesFiguresFlowsFunctionsAppApiRouter): void => {
  router.all("*", [
    middleware.request.ipAddress,
    middleware.response.locals.ipAddress,
  ]);
  router.get("/", controllers.index);
  router.get("/breathe", controllers.breathe);

  router.post(
    "/keys/access/sign",
    [
      middleware.request.headers.xFlowsAccount,
      middleware.response.locals.xFlowsAccount,
    ],
    controllers.keys.access.sign
  );

  router.post(
    "/keys/access/verify",
    [
      middleware.request.headers.xFlowsAccount,
      middleware.response.locals.xFlowsAccount,
      middleware.request.headers.xFlowsToken,
    ],
    controllers.keys.access.verify
  );

  app.use(router);
  return;
};
