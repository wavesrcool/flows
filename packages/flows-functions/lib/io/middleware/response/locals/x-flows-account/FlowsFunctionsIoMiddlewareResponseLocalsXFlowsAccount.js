"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount = void 0;
const FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount = (_req, res, next) => {
    const { xFlowsAccount } = res.locals;
    if (xFlowsAccount && typeof xFlowsAccount === "string") {
        next();
        return;
    }
    res.status(404).send({ error: "response-locals-xFlowsAccount" });
};
exports.FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount = FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount;
