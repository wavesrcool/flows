import { TypesResolveFlowsFunctionsIoInstanceKeys } from "@wavesrcool/flows-functions";
import { controllers } from "../controllers/controllers";
import { middleware } from "../middleware/middleware";

export const routes = ({
  app,
  router,
}: TypesResolveFlowsFunctionsIoInstanceKeys): void => {
  // all
  router.all("*", [middleware.all.requests, middleware.all.locals]);

  // index
  router.get("/", controllers.index);

  // breathe
  router.get("/breathe", controllers.breathe);

  router.post(
    "/keys/access/sign",
    [middleware.keys.access.sign.requests, middleware.keys.access.sign.locals],
    controllers.keys.access.sign
  );

  router.post(
    "/keys/access/verify",
    [
      middleware.keys.access.verify.requests,
      middleware.keys.access.verify.locals,
    ],
    controllers.keys.access.verify
  );

  app.use(router);
  return;
};
