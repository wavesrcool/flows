"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowsModelsAccountCreateInput = void 0;
const type_graphql_1 = require("type-graphql");
const FlowsModelsAccountRecordsInput_1 = require("../records/FlowsModelsAccountRecordsInput");
let FlowsModelsAccountCreateInput = class FlowsModelsAccountCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FlowsModelsAccountCreateInput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FlowsModelsAccountCreateInput.prototype, "ipAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], FlowsModelsAccountCreateInput.prototype, "isAdmin", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FlowsModelsAccountRecordsInput_1.FlowsModelsAccountRecordsInput),
    __metadata("design:type", FlowsModelsAccountRecordsInput_1.FlowsModelsAccountRecordsInput)
], FlowsModelsAccountCreateInput.prototype, "records", void 0);
FlowsModelsAccountCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], FlowsModelsAccountCreateInput);
exports.FlowsModelsAccountCreateInput = FlowsModelsAccountCreateInput;
