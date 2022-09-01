import { Express, Router } from "express";
import { controllers } from "../controllers/controllers";
import { middleware } from "../middleware/middleware";

const router = Router();

export const routes = (app: Express) => {
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
      middleware.response.locals.xFlowsToken.encoded,
      middleware.response.locals.xFlowsToken.records,
    ],
    controllers.keys.access.verify
  );

  app.use(router);
};
