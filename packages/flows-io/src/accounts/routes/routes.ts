import { TypesResolveFlowsFunctionsIoInstancesKeys } from "@wavesrcool/flows-functions";
import { TypesFiguresFlowsIoKeys } from "../../keys/TypesFiguresFlowsIoKeys";
import { controllers } from "../controllers/controllers";
import { middleware } from "../middleware/middleware";

export const routes = async (
  figure: TypesFiguresFlowsIoKeys & TypesResolveFlowsFunctionsIoInstancesKeys
): Promise<void> => {
  // all
  figure.router.all("*", [middleware.all.requests, middleware.all.locals]);

  // index
  figure.router.get("/", controllers.index);

  // breathe
  figure.router.get("/breathe", controllers.breathe);

  figure.router.route("/accounts/create").post(
    // [middleware.accounts.create.requests, middleware.accounts.create.locals],
    await controllers.accounts.create(figure.connection)
  );

  figure.app.use(figure.router);
  return;
};
