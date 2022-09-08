import { FlowsFunctionsDatabaseConnection } from "@wavesrcool/flows-functions";
import { FlowsCoreDatabasePostgreSQLConnection } from "./connection/FlowsCoreDatabasePostgreSQLConnection";
export declare type TypesFiguresFlowsCoreDatabasePostgreSQL = {
    figureConnection: ReturnType<typeof FlowsFunctionsDatabaseConnection>;
};
export declare class FlowsCoreDatabasePostgreSQL {
    private conn;
    constructor({ figureConnection }: TypesFiguresFlowsCoreDatabasePostgreSQL);
    get connection(): FlowsCoreDatabasePostgreSQLConnection;
}
//# sourceMappingURL=FlowsCoreDatabasePostgreSQL.d.ts.map