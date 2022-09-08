"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsHashText = void 0;
const crypto_1 = require("crypto");
const FlowsFunctionsHashText = ({ text, secret, }) => {
    console.log(`publish`);
    const md5 = (0, crypto_1.createHmac)("md5", secret).update(text).digest("hex");
    return md5;
};
exports.FlowsFunctionsHashText = FlowsFunctionsHashText;
