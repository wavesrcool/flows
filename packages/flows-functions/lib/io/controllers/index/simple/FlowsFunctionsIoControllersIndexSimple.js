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
exports.FlowsFunctionsIoControllersIndexSimple = void 0;
const FlowsFunctionsIoControllersIndexSimple = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ip = res.locals.ipAddress || "no-ip-address";
        const message = `[flows-io] Received. (${ip})`;
        res.setHeader("Content-Type", "text/html");
        res.status(200).send(`<p>${message}</p>`);
        return;
    }
    catch (e) {
        console.log(`[flows-io] Error. FlowsFunctionsIoControllersIndexSimple. ${String(e)}`);
        res.status(500).send({ error: "flows-io" });
        return;
    }
});
exports.FlowsFunctionsIoControllersIndexSimple = FlowsFunctionsIoControllersIndexSimple;
