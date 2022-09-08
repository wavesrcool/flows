import { BaseEntity } from "typeorm";
import { FlowsModelsEmailMessage } from "../message/FlowsModelsEmailMessage.entity";
import { FlowsModelsEmailAddressRecords } from "./_objects/records/FlowsModelsEmailAddressRecords";
export declare class FlowsModelsEmailAddress extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    key: string;
    address: string;
    locked: boolean;
    lockedDate: string | null;
    ipList: string[] | null;
    records: FlowsModelsEmailAddressRecords | null;
    messages: FlowsModelsEmailMessage[];
}
//# sourceMappingURL=FlowsModelsEmailAddress.entity.d.ts.map