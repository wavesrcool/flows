import { TypesResolveFlowsFunctionsIoInstancesKeys } from "@wavesrcool/flows-functions";
import { controllers } from "../controllers/controllers";
import { middleware } from "../middleware/middleware";
import { TypesFiguresFlowsIoKeys } from "../TypesFiguresFlowsIoKeys";

export const routes = async (
  figure: TypesFiguresFlowsIoKeys & TypesResolveFlowsFunctionsIoInstancesKeys
): Promise<void> => {
  const { app, router, connection } = figure;
  // all
  router.all("*", [middleware.all.requests, middleware.all.locals]);

  // index
  router.get("/", controllers.index);

  // breathe
  router.get("/breathe", controllers.breathe);

  router
    .route("/keys/access/sign")
    .post(
      [
        middleware.keys.access.sign.requests,
        middleware.keys.access.sign.locals,
      ],
      await controllers.keys.access.sign(connection)
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
