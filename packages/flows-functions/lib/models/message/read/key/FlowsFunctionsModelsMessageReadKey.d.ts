import { FlowsModelsEmailMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
export declare type TypesFiguresFlowsFunctionsModelsMessageReadKey = {
    key: string;
    ds: DataSource;
};
export declare const FlowsFunctionsModelsMessageReadKey: ({ ds, key, }: TypesFiguresFlowsFunctionsModelsMessageReadKey) => Promise<FlowsModelsEmailMessage | undefined>;
//# sourceMappingURL=FlowsFunctionsModelsMessageReadKey.d.ts.map