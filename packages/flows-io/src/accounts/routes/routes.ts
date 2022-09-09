import { TypesResolveFlowsFunctionsIoInstanceKeys } from "@wavesrcool/flows-functions";
import { controllers } from "../controllers/controllers";
import { middleware } from "../middleware/middleware";

export const routes = ({
  app,
  router,
}: TypesResolveFlowsFunctionsIoInstanceKeys): void => {
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
