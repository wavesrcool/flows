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
exports.FlowsCoreIoKeys = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const flows_io_1 = require("@wavesrcool/flows-io");
class FlowsCoreIoKeys {
    constructor(figure) {
        this.ioKeysFigure = figure;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, flows_io_1.FlowsIoKeys)(this.ioKeysFigure)
                .then(() => {
                console.log(`[flows-core] Running. IoKeys.`);
            })
                .catch((e) => {
                console.log(`[flows-core] Error. IoKeys. ${String(e)}`);
            });
        });
    }
}
exports.FlowsCoreIoKeys = FlowsCoreIoKeys;
