"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken = void 0;
const FlowsFunctionsJwtVerify_1 = require("../../../../../jwt/verify/FlowsFunctionsJwtVerify");
const FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const routesUnsecured = process.env.FLOWS_GLOBAL_ROUTES_UNSECURED;
        if (routesUnsecured && typeof routesUnsecured === "string") {
            const routesUnsecuredList = String(routesUnsecured).split(",");
            if (routesUnsecuredList &&
                routesUnsecuredList.length &&
                routesUnsecuredList.includes(req.path)) {
                next();
                return;
            }
            const xFlowsToken = req.headers["x-flows-token"];
            if (xFlowsToken && typeof xFlowsToken === "string") {
                const { complete: jwtVerifyComplete, message: jwtVerifyMessage } = yield (0, FlowsFunctionsJwtVerify_1.FlowsFunctionsJwtVerify)({
                    encoded: xFlowsToken,
                });
                if (jwtVerifyComplete && !jwtVerifyMessage) {
                    next();
                    return;
                }
            }
        }
        res.status(400).send({ error: "x-flows-token" });
    }
    catch (e) {
        console.log(e, "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken");
        res.status(404).send({
            error: "FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken",
        });
    }
});
exports.FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken = FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken;
