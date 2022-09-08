import { FlowsModelsEmailMessageCreateInput } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
export declare type TypesFiguresFlowsFunctionsModelsMessageCreate = {
    input: FlowsModelsEmailMessageCreateInput;
    ds: DataSource;
};
export declare const FlowsFunctionsModelsMessageCreate: ({ ds, input: { records }, }: TypesFiguresFlowsFunctionsModelsMessageCreate) => Promise<number | undefined>;
//# sourceMappingURL=FlowsFunctionsModelsMessageCreate.d.ts.map