"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const flows_functions_1 = require("@wavesrcool/flows-functions");
exports.middleware = {
    request: {
        ipAddress: flows_functions_1.FlowsFunctionsIoMiddlewareRequestIpAddress,
    },
    response: {
        locals: {
            ipAddress: flows_functions_1.FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
        },
    },
};
