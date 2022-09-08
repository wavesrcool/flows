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
exports.FlowsFunctionsModelsRelationsAccountLocalCreate = void 0;
const flows_models_1 = require("@wavesrcool/flows-models");
const FlowsFunctionsModelsRelationsAccountLocalCreate = ({ ds, pkAccount, pkLocal, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ds
            .createQueryBuilder()
            .relation(flows_models_1.FlowsModelsAccount, "locals")
            .of(pkAccount)
            .add(pkLocal);
        yield ds
            .createQueryBuilder()
            .relation(flows_models_1.FlowsModelsEmailLocal, "account")
            .of(pkLocal)
            .set(pkAccount);
        return true;
    }
    catch (e) {
        console.log(e, "FlowsFunctionsModelsRelationsAccountLocalCreate");
        return false;
    }
});
exports.FlowsFunctionsModelsRelationsAccountLocalCreate = FlowsFunctionsModelsRelationsAccountLocalCreate;
