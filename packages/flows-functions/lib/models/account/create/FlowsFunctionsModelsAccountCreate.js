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
exports.FlowsFunctionsModelsAccountCreate = void 0;
const flows_models_1 = require("@wavesrcool/flows-models");
const FlowsFunctionsModelsAccountCreate = ({ ds, input: { value, ipAddress, isAdmin, records }, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ipList = [ipAddress];
        const create = yield ds
            .createQueryBuilder()
            .insert()
            .into(flows_models_1.FlowsModelsAccount)
            .values({ value, ipList, isAdmin, records })
            .execute();
        const { id: pkCreate } = create.raw[0];
        if (!pkCreate) {
            return undefined;
        }
        return pkCreate;
    }
    catch (e) {
        console.log(e, "FlowsFunctionsModelsAccountCreate");
        return undefined;
    }
});
exports.FlowsFunctionsModelsAccountCreate = FlowsFunctionsModelsAccountCreate;
