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
exports.FlowsModelsEmailLocal = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const FlowsModelsAccount_entity_1 = require("../account/FlowsModelsAccount.entity");
const FlowsModelsEmailMessage_entity_1 = require("../message/FlowsModelsEmailMessage.entity");
let FlowsModelsEmailLocal = class FlowsModelsEmailLocal extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FlowsModelsEmailLocal.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FlowsModelsEmailLocal.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FlowsModelsEmailLocal.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], FlowsModelsEmailLocal.prototype, "key", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], FlowsModelsEmailLocal.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    (0, typeorm_1.Column)({ type: "int8", nullable: true }),
    __metadata("design:type", Number)
], FlowsModelsEmailLocal.prototype, "accountId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FlowsModelsAccount_entity_1.FlowsModelsAccount),
    (0, typeorm_1.ManyToOne)(() => FlowsModelsAccount_entity_1.FlowsModelsAccount, (account) => account.locals),
    __metadata("design:type", FlowsModelsAccount_entity_1.FlowsModelsAccount)
], FlowsModelsEmailLocal.prototype, "account", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [FlowsModelsEmailMessage_entity_1.FlowsModelsEmailMessage]),
    (0, typeorm_1.OneToMany)(() => FlowsModelsEmailMessage_entity_1.FlowsModelsEmailMessage, (message) => message.local),
    __metadata("design:type", Array)
], FlowsModelsEmailLocal.prototype, "messages", void 0);
FlowsModelsEmailLocal = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], FlowsModelsEmailLocal);
exports.FlowsModelsEmailLocal = FlowsModelsEmailLocal;
