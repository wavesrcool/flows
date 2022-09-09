/* eslint-disable @typescript-eslint/no-explicit-any */

import { TypesFiguresFlowsFunctionsDatabaseConnection } from "@wavesrcool/flows-functions";
import { FlowsCoreDatabasePostgreSQLConnection } from "./connection/FlowsCoreDatabasePostgreSQLConnection";

export type TypesFiguresFlowsCoreDatabasePostgreSQL = {
  figureConnection: TypesFiguresFlowsFunctionsDatabaseConnection;
};

export class FlowsCoreDatabasePostgreSQL {
  private conn: FlowsCoreDatabasePostgreSQLConnection;

  constructor({ figureConnection }: TypesFiguresFlowsCoreDatabasePostgreSQL) {
    this.conn = new FlowsCoreDatabasePostgreSQLConnection(figureConnection);
  }

  public get connection() {
    return this.conn;
  }
}
