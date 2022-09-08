import { FlowsModelsAccountCreateInput } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
export declare type TypesFiguresFlowsFunctionsModelsAccountCreate = {
    input: FlowsModelsAccountCreateInput;
    ds: DataSource;
};
export declare const FlowsFunctionsModelsAccountCreate: ({ ds, input: { value, ipAddress, isAdmin, records }, }: TypesFiguresFlowsFunctionsModelsAccountCreate) => Promise<number | undefined>;
//# sourceMappingURL=FlowsFunctionsModelsAccountCreate.d.ts.map