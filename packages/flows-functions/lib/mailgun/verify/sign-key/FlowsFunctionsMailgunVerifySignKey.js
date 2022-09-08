"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsMailgunVerifySignKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
const FlowsFunctionsMailgunVerifySignKey = ({ timestamp, token, signature, signKey, }) => {
    const encodedToken = crypto_1.default
        .createHmac("sha256", signKey)
        .update(timestamp.concat(token))
        .digest("hex");
    const verify = !!(encodedToken === signature);
    return verify;
};
exports.FlowsFunctionsMailgunVerifySignKey = FlowsFunctionsMailgunVerifySignKey;
