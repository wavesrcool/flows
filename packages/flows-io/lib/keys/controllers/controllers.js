"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const flows_functions_1 = require("@wavesrcool/flows-functions");
exports.controllers = {
    index: flows_functions_1.FlowsFunctionsIoControllersIndexSimple,
    breathe: flows_functions_1.FlowsFunctionsIoControllersBreathe,
    keys: {
        access: {
            sign: flows_functions_1.FlowsFunctionsIoControllersKeysAccessSign,
            verify: flows_functions_1.FlowsFunctionsIoControllersKeysAccessVerify,
        },
    },
};
