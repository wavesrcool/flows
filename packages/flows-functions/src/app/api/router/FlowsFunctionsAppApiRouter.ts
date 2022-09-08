import { Router, Express } from "express";
import { FlowsFunctionsIoControllersBreathe } from "../../../../src/io/controllers/breathe/FlowsFunctionsIoControllersBreathe";
import { FlowsFunctionsIoControllersIndexSimple } from "../../../../src/io/controllers/index/simple/FlowsFunctionsIoControllersIndexSimple";
import { FlowsFunctionsIoControllersKeysAccessSign } from "../../../../src/io/controllers/keys/access/sign/FlowsFunctionsIoControllersKeysAccessSign";
import { FlowsFunctionsIoControllersKeysAccessVerify } from "../../../../src/io/controllers/keys/access/verify/FlowsFunctionsIoControllersKeysAccessVerify";
import { FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess } from "../../../../src/io/middleware/request/headers/x-flows-access/FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess";
import { FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount } from "../../../../src/io/middleware/request/headers/x-flows-account/FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount";
import { FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken } from "../../../../src/io/middleware/request/headers/x-flows-token/FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken";
import { FlowsFunctionsIoMiddlewareRequestIpAddress } from "../../../../src/io/middleware/request/ip-address/FlowsFunctionsIoMiddlewareRequestIpAddress";
import { FlowsFunctionsIoMiddlewareResponseLocalsIpAddress } from "../../../../src/io/middleware/response/locals/ip-address/FlowsFunctionsIoMiddlewareResponseLocalsIpAddress";
import { FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount } from "../../../../src/io/middleware/response/locals/x-flows-account/FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount";

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
