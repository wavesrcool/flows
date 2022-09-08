import { BaseEntity } from "typeorm";
import { FlowsModelsEmailLocal } from "../local/FlowsModelsEmailLocal.entity";
import { FlowsModelsAccountRecords } from "./_objects/records/FlowsModelsAccountRecords";
export declare class FlowsModelsAccount extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    key: string;
    value: string;
    isAdmin: boolean;
    locked: boolean;
    lockedDate: string | null;
    ipList: string[] | null;
    records: FlowsModelsAccountRecords | null;
    locals: FlowsModelsEmailLocal[];
}
//# sourceMappingURL=FlowsModelsAccount.entity.d.ts.map