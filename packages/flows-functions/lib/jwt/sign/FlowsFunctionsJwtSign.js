"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsFunctionsJwtSign = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const FlowsFunctionsEncryptionTextEncode_1 = require("../../encryption/text/encode/FlowsFunctionsEncryptionTextEncode");
const FlowsFunctionsHashText_1 = require("../../hash/text/FlowsFunctionsHashText");
// import { FlowsFunctionsHashText } from "../../hash/text/FlowsFunctionsHashText";
const signOptions = {
    algorithm: "HS512",
    expiresIn: "16h",
};
const FlowsFunctionsJwtSign = ({ records, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const text = JSON.stringify(records);
        const secretEncryption = process.env.FLOWS_GLOBAL_SECRET_ENCRYPTION;
        if (!secretEncryption) {
            throw new Error(`[flows-functions] Error. FlowsFunctionsJwtSign: secretEncryption`);
        }
        const secretHash = process.env.FLOWS_GLOBAL_SECRET_HASH;
        if (!secretHash) {
            throw new Error(`[flows-functions] Error. FlowsFunctionsJwtSign: secretHash`);
        }
        const secretJwt = process.env.FLOWS_GLOBAL_SECRET_JWT;
        if (!secretJwt) {
            throw new Error(`[flows-functions] Error. FlowsFunctionsJwtSign: secretJwt`);
        }
        const cipher = (0, FlowsFunctionsEncryptionTextEncode_1.FlowsFunctionsEncryptionTextEncode)({
            text,
            secret: secretEncryption,
        });
        const hash = (0, FlowsFunctionsHashText_1.FlowsFunctionsHashText)({ text, secret: secretHash });
        const data = {
            aud: "all",
            iss: "flow-keys",
            sub: "key",
            hash,
            cipher,
        };
        return new Promise((resolve) => {
            return (0, jsonwebtoken_1.sign)(data, secretJwt, signOptions, (signError, encoded) => {
                if (signError === null) {
                    if (encoded !== undefined) {
                        resolve({
                            complete: true,
                            message: undefined,
                            encoded,
                        });
                    }
                    // end
                }
                else {
                    resolve({
                        complete: false,
                        message: signError.message,
                        encoded: undefined,
                    });
                    // end
                }
                return;
            });
        });
    }
    catch (e) {
        console.log(e, "FlowsFunctionsJwtSign");
        return {
            complete: false,
            message: `catch`,
            encoded: undefined,
        };
    }
});
exports.FlowsFunctionsJwtSign = FlowsFunctionsJwtSign;
