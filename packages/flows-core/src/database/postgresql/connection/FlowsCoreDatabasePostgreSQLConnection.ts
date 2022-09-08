import { FlowsFunctionsDatabaseConnection } from "@wavesrcool/flows-functions";

export class FlowsCoreDatabasePostgreSQLConnection {
  private db: ReturnType<typeof FlowsFunctionsDatabaseConnection>;

  constructor(f: TypesFiguresFlowsFunctionsDatabaseConnection) {
    const db = FlowsFunctionsDatabaseConnection(f);
    this.db = db;
  }
}
