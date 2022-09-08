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
exports.FlowsFunctionsIoControllersKeysAccessSign = void 0;
const FlowsFunctionsJwtSign_1 = require("../../../../../jwt/sign/FlowsFunctionsJwtSign");
const FlowsFunctionsIoControllersKeysAccessSign = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { xFlowsAccount } = res.locals;
        if (!xFlowsAccount || !(typeof xFlowsAccount === "string")) {
            res.status(400).send({ error: "keys-sign-xFlowsAccount" });
            return;
        }
        const records = {
            account: {
                value: xFlowsAccount,
                key: "@todo-add-database-lookup-on-xFlowsAccount",
            },
        };
        const { complete: jwtSignComplete, message: jwtSignMessage, encoded: jwtSignEncoded, } = yield (0, FlowsFunctionsJwtSign_1.FlowsFunctionsJwtSign)({
            records,
        });
        if (jwtSignComplete && jwtSignEncoded && !jwtSignMessage) {
            res.status(200).send({
                message: `[flow-io] Received. (${res.locals.ipAddress || "no-ip-address"})`,
                "keys-access-sign": true,
                encoded: jwtSignEncoded,
            });
            return;
        }
        if (jwtSignMessage) {
            res.status(400).send({ error: `keys-access-sign-${jwtSignMessage}` });
            return;
        }
        res.status(400).send({ error: "keys-access-sign" });
    }
    catch (e) {
        console.log(`[flow-io] Error. FlowsFunctionsIoControllersKeysAccessSign. ${String(e)}`);
        res.status(500).send({ error: "flow-io" });
    }
});
exports.FlowsFunctionsIoControllersKeysAccessSign = FlowsFunctionsIoControllersKeysAccessSign;
