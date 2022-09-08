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
exports.FlowsModelsAccount = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const FlowsModelsEmailLocal_entity_1 = require("../local/FlowsModelsEmailLocal.entity");
const FlowsModelsAccountRecords_1 = require("./_objects/records/FlowsModelsAccountRecords");
let FlowsModelsAccount = class FlowsModelsAccount extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FlowsModelsAccount.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FlowsModelsAccount.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FlowsModelsAccount.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], FlowsModelsAccount.prototype, "key", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], FlowsModelsAccount.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], FlowsModelsAccount.prototype, "isAdmin", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], FlowsModelsAccount.prototype, "locked", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], FlowsModelsAccount.prototype, "lockedDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Object)
], FlowsModelsAccount.prototype, "ipList", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FlowsModelsAccountRecords_1.FlowsModelsAccountRecords, { nullable: true }),
    (0, typeorm_1.Column)({ type: "json", nullable: true }),
    __metadata("design:type", Object)
], FlowsModelsAccount.prototype, "records", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [FlowsModelsEmailLocal_entity_1.FlowsModelsEmailLocal]),
    (0, typeorm_1.OneToMany)(() => FlowsModelsEmailLocal_entity_1.FlowsModelsEmailLocal, (local) => local.account),
    __metadata("design:type", Array)
], FlowsModelsAccount.prototype, "locals", void 0);
FlowsModelsAccount = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], FlowsModelsAccount);
exports.FlowsModelsAccount = FlowsModelsAccount;
