"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsValidationsString = void 0;
const FlowsFunctionsValidationsString = (s) => {
    if (!s || !(typeof s === "string")) {
        return undefined;
    }
    const string = String(s).trim();
    return string;
};
exports.FlowsFunctionsValidationsString = FlowsFunctionsValidationsString;
