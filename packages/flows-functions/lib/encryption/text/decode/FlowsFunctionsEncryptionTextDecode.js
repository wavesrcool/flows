"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsEncryptionTextDecode = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const FlowsFunctionsEncryptionTextDecode = ({ text, secret, }) => {
    const decode = crypto_js_1.default.AES.decrypt(text, secret).toString(crypto_js_1.default.enc.Utf8);
    return decode;
};
exports.FlowsFunctionsEncryptionTextDecode = FlowsFunctionsEncryptionTextDecode;
