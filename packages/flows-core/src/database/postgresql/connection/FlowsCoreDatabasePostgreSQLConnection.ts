import {
  FlowsFunctionsDatabaseConnection,
  TypesFlowsFunctionsFiguresDatabaseConnection,
} from "@wavesrcool/flows-functions";

export class FlowsCoreDatabasePostgreSQLConnection {
  private databaseConnection: ReturnType<
    typeof FlowsFunctionsDatabaseConnection
  >;

  constructor(f: TypesFlowsFunctionsFiguresDatabaseConnection) {
    const databaseConnection = FlowsFunctionsDatabaseConnection(f);
    this.databaseConnection = databaseConnection;
  }

  public get instance() {
    return this.databaseConnection;
  }
}
