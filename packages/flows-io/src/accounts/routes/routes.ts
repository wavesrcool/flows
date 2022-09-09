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

  app.use(router);
  return;
};
