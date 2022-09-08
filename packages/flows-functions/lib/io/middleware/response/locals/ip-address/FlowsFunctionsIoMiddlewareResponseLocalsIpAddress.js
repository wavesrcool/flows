"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsIoMiddlewareResponseLocalsIpAddress = void 0;
const FlowsFunctionsIoMiddlewareResponseLocalsIpAddress = (_req, res, next) => {
    const { ipAddress } = res.locals;
    if (ipAddress && typeof ipAddress === "string") {
        next();
        return;
    }
    res.status(404).send({ error: "response-locals-ipAddress" });
};
exports.FlowsFunctionsIoMiddlewareResponseLocalsIpAddress = FlowsFunctionsIoMiddlewareResponseLocalsIpAddress;
