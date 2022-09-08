"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsEncryptionTextEncode = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const FlowsFunctionsEncryptionTextEncode = ({ text, secret, }) => {
    const encode = crypto_js_1.default.AES.encrypt(text, secret).toString();
    return encode;
};
exports.FlowsFunctionsEncryptionTextEncode = FlowsFunctionsEncryptionTextEncode;
