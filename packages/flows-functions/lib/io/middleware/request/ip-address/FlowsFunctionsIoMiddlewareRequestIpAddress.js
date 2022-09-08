"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsIoMiddlewareRequestIpAddress = void 0;
const FlowsFunctionsIoMiddlewareRequestIpAddress = (req, res, next) => {
    const { ip: ip0 } = req;
    const ipl = ip0.split(":");
    let ip;
    if (ipl.length === 1) {
        ip = ip0;
    }
    else {
        ipl.pop();
        ip = ipl.join();
    }
    if (ip && ip.split(".").length === 4) {
        res.locals.ipAddress = ip;
        next();
        return;
    }
    res.locals.ipAddress = `127.0.0.1`;
    next();
    return;
};
exports.FlowsFunctionsIoMiddlewareRequestIpAddress = FlowsFunctionsIoMiddlewareRequestIpAddress;
