"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const flows_functions_1 = require("@wavesrcool/flows-functions");
exports.middleware = {
    request: {
        headers: {
            xFlowsAccess: flows_functions_1.FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccess,
            xFlowsAccount: flows_functions_1.FlowsFunctionsIoMiddlewareRequestHeadersXFlowsAccount,
            xFlowsToken: flows_functions_1.FlowsFunctionsIoMiddlewareRequestHeadersXFlowsToken,
        },
        ipAddress: flows_functions_1.FlowsFunctionsIoMiddlewareRequestIpAddress,
    },
    response: {
        locals: {
            ipAddress: flows_functions_1.FlowsFunctionsIoMiddlewareResponseLocalsIpAddress,
            xFlowsAccount: flows_functions_1.FlowsFunctionsIoMiddlewareResponseLocalsXFlowsAccount,
        },
    },
};
