"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
const middleware_1 = require("../middleware/middleware");
const router = (0, express_1.Router)();
const routes = (app) => {
    router.all("*", [
        middleware_1.middleware.request.ipAddress,
        middleware_1.middleware.response.locals.ipAddress,
    ]);
    router.get("/", controllers_1.controllers.index);
    router.get("/breathe", controllers_1.controllers.breathe);
    router.post("/keys/access/sign", [
        middleware_1.middleware.request.headers.xFlowsAccount,
        middleware_1.middleware.response.locals.xFlowsAccount,
    ], controllers_1.controllers.keys.access.sign);
    router.post("/keys/access/verify", [
        middleware_1.middleware.request.headers.xFlowsAccount,
        middleware_1.middleware.response.locals.xFlowsAccount,
        middleware_1.middleware.request.headers.xFlowsToken,
    ], controllers_1.controllers.keys.access.verify);
    app.use(router);
};
exports.routes = routes;
