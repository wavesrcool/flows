import { BaseEntity } from "typeorm";
import { FlowsModelsAccount } from "../account/FlowsModelsAccount.entity";
import { FlowsModelsEmailMessage } from "../message/FlowsModelsEmailMessage.entity";
export declare class FlowsModelsEmailLocal extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    key: string;
    value: string;
    accountId: number;
    account: FlowsModelsAccount;
    messages: FlowsModelsEmailMessage[];
}
//# sourceMappingURL=FlowsModelsEmailLocal.entity.d.ts.map