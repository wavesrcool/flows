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
exports.FlowsModelsEmailAddressCreateInput = void 0;
const type_graphql_1 = require("type-graphql");
const FlowsModelsEmailAddressRecordsInput_1 = require("../records/FlowsModelsEmailAddressRecordsInput");
let FlowsModelsEmailAddressCreateInput = class FlowsModelsEmailAddressCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FlowsModelsEmailAddressCreateInput.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FlowsModelsEmailAddressCreateInput.prototype, "ipAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FlowsModelsEmailAddressRecordsInput_1.FlowsModelsEmailAddressRecordsInput, { nullable: true }),
    __metadata("design:type", Object)
], FlowsModelsEmailAddressCreateInput.prototype, "records", void 0);
FlowsModelsEmailAddressCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], FlowsModelsEmailAddressCreateInput);
exports.FlowsModelsEmailAddressCreateInput = FlowsModelsEmailAddressCreateInput;
