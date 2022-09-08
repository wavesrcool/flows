import { FlowsModelsEmailAddress } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
export declare type TypesFiguresFlowsFunctionsModelsEmailRead = {
    address: string;
    ds: DataSource;
};
export declare const FlowsFunctionsModelsEmailRead: ({ ds, address, }: TypesFiguresFlowsFunctionsModelsEmailRead) => Promise<FlowsModelsEmailAddress | undefined>;
//# sourceMappingURL=FlowsFunctionsModelsEmailRead.d.ts.map