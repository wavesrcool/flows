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
exports.FlowsFunctionsJwtVerify = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-promise-executor-return */
const jsonwebtoken_1 = require("jsonwebtoken");
const FlowsFunctionsEncryptionTextDecode_1 = require("../../encryption/text/decode/FlowsFunctionsEncryptionTextDecode");
const FlowsFunctionsHashText_1 = require("../../hash/text/FlowsFunctionsHashText");
const verifyOptions = {
    algorithms: ["HS512"],
};
const FlowsFunctionsJwtVerify = ({ encoded, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        return new Promise((resolve) => {
            return (0, jsonwebtoken_1.verify)(encoded, secretJwt, verifyOptions, (verifyError, decoded0) => {
                if (verifyError === null) {
                    if (decoded0 !== undefined) {
                        const { hash: hash0, cipher: cipher0 } = decoded0;
                        if (!hash0 || typeof hash0 !== "string") {
                            resolve({
                                complete: false,
                                message: "jwt-hash",
                            });
                            return;
                        }
                        if (!cipher0 || typeof cipher0 !== "string") {
                            resolve({
                                complete: false,
                                message: "jwt-cipher",
                            });
                            return;
                        }
                        const decoded = (0, FlowsFunctionsEncryptionTextDecode_1.FlowsFunctionsEncryptionTextDecode)({
                            text: cipher0,
                            secret: secretEncryption,
                        });
                        const hash = (0, FlowsFunctionsHashText_1.FlowsFunctionsHashText)({
                            text: decoded,
                            secret: secretHash,
                        });
                        if (!(hash === hash0)) {
                            resolve({
                                complete: false,
                                message: "jwt-equivalence",
                            });
                            return;
                        }
                        resolve({
                            complete: true,
                            message: undefined,
                        });
                        /* const records0 = JSON.parse(decoded);
          
                        if (!records0 || !(typeof records0 === "object")) {
                          resolve({
                            complete: false,
                            message: "jwt-records",
                            records: undefined,
                          });
                          return;
                        }
          
                        const { account: account0 } = records0;
          
                        if (!account0 || !(typeof account0 === "object")) {
                          resolve({
                            complete: false,
                            message: "jwt-account",
                            records: undefined,
                          });
                          return;
                        }
          
                        const { value: value0, key: key0 } = account0;
          
                        if (!value0 || typeof value0 !== "string") {
                          resolve({
                            complete: false,
                            message: "jwt-account-value",
                            records: undefined,
                          });
                          return;
                        }
          
                        if (!key0 || typeof key0 !== "string") {
                          resolve({
                            complete: false,
                            message: "jwt-account-key",
                            records: undefined,
                          });
                          return;
                        }
          
                        const value = String(value0).trim();
                        const key = String(key0).trim();
                        */
                    }
                }
                else {
                    resolve({
                        complete: false,
                        message: verifyError.message,
                    });
                }
                return;
            });
        });
    }
    catch (e) {
        console.log(e, "FlowsFunctionsJwtVerify");
        return {
            complete: false,
            message: "catch",
        };
    }
});
exports.FlowsFunctionsJwtVerify = FlowsFunctionsJwtVerify;
