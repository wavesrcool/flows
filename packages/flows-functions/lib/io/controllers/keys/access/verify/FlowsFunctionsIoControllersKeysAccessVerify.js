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
exports.FlowsFunctionsIoControllersKeysAccessVerify = void 0;
const FlowsFunctionsIoControllersKeysAccessVerify = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { xFlowsAccount, xFlowsTokenEncoded, xFlowsTokenRecords } = res.locals;
        if (xFlowsAccount && xFlowsTokenEncoded && xFlowsTokenRecords) {
            const { account: { value, key }, } = xFlowsTokenRecords;
            if (xFlowsAccount === value) {
                res.status(200).send({
                    message: `[flow-io] Received. (${res.locals.ipAddress || "no-ip-address"})`,
                    "keys-access-verify": true,
                    encoded: xFlowsTokenEncoded,
                    value,
                    key,
                });
                return;
            }
            res.status(400).send({ error: "keys-access-verify-account" });
        }
        else {
            res.status(400).send({ error: "keys-access-verify" });
        }
    }
    catch (e) {
        console.log(`[flow-keys] Error. FlowsFunctionsIoControllersKeysAccessVerify. ${String(e)}`);
        res.status(500).send({ error: "flow-io" });
    }
});
exports.FlowsFunctionsIoControllersKeysAccessVerify = FlowsFunctionsIoControllersKeysAccessVerify;
