/* eslint-disable @typescript-eslint/no-explicit-any */

import { TypesFlowsFunctionsFiguresDatabaseConnection } from "@wavesrcool/flows-functions";
import { FlowsCoreDatabasePostgreSQLConnection } from "./connection/FlowsCoreDatabasePostgreSQLConnection";

export type TypesFiguresFlowsCoreDatabasePostgreSQL = {
  figureConnection: TypesFlowsFunctionsFiguresDatabaseConnection;
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
