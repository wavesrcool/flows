import { BaseEntity } from "typeorm";
import { FlowsModelsEmailAddress } from "../email-address/FlowsModelsEmailAddress.entity";
import { FlowsModelsEmailLocal } from "../local/FlowsModelsEmailLocal.entity";
import { FlowsModelsEmailMessageRecords } from "./_objects/records/FlowsModelsEmailMessageRecords";
export declare class FlowsModelsEmailMessage extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    key: string;
    records: FlowsModelsEmailMessageRecords | null;
    emailId: number;
    email: FlowsModelsEmailAddress;
    localId: number;
    local: FlowsModelsEmailLocal;
}
//# sourceMappingURL=FlowsModelsEmailMessage.entity.d.ts.map