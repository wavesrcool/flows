import { FlowsModelsEmailAddressCreateInput } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
export declare type TypesFiguresFlowsFunctionsModelsEmailCreate = {
    input: FlowsModelsEmailAddressCreateInput;
    ds: DataSource;
};
export declare const FlowsFunctionsModelsEmailCreate: ({ ds, input: { address, ipAddress, records }, }: TypesFiguresFlowsFunctionsModelsEmailCreate) => Promise<number | undefined>;
//# sourceMappingURL=FlowsFunctionsModelsEmailCreate.d.ts.map