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

  app.use(router);
};
