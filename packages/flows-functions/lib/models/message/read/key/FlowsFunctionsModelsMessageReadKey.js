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
exports.FlowsFunctionsModelsMessageReadKey = void 0;
const flows_models_1 = require("@wavesrcool/flows-models");
const FlowsFunctionsModelsMessageReadKey = ({ ds, key, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const read = yield ds
            .createQueryBuilder()
            .select("local")
            .from(flows_models_1.FlowsModelsEmailMessage, "message")
            .where("message.key = :key", { key })
            .getOne();
        if (!read || !read.id) {
            return undefined;
        }
        return read;
    }
    catch (e) {
        console.log(e, "FlowsFunctionsModelsMessageReadKey");
        return undefined;
    }
});
exports.FlowsFunctionsModelsMessageReadKey = FlowsFunctionsModelsMessageReadKey;
