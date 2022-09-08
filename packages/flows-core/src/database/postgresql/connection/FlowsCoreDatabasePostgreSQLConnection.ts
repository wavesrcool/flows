import {
  FlowsFunctionsDatabaseConnection,
  TypesFiguresFlowsFunctionsDatabaseConnection,
} from "@wavesrcool/flows-functions";

export class FlowsCoreDatabasePostgreSQLConnection {
  private databaseConnection: ReturnType<
    typeof FlowsFunctionsDatabaseConnection
  >;

  constructor(f: TypesFiguresFlowsFunctionsDatabaseConnection) {
    const databaseConnection = FlowsFunctionsDatabaseConnection(f);
    this.databaseConnection = databaseConnection;
  }

  public async initialize(): Promise<void> {
    this.databaseConnection
      .initialize()
      .then(() =>
        console.log(`[flows-core]: Database (PostgreSQL) initialized.`)
      );
  }
}
