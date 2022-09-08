import { FlowsTypesJwtRecords } from "@wavesrcool/flows-types";
export declare type TypesResolveFlowsFunctionsJwtSign = {
    complete: boolean;
    message: string | undefined;
    encoded: string | undefined;
};
export declare type TypesFiguresFlowsFunctionsJwtSign = {
    records: FlowsTypesJwtRecords;
};
export declare const FlowsFunctionsJwtSign: ({ records, }: TypesFiguresFlowsFunctionsJwtSign) => Promise<TypesResolveFlowsFunctionsJwtSign>;
//# sourceMappingURL=FlowsFunctionsJwtSign.d.ts.map