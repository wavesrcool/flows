import { FlowsFunctionsDatabaseConnection } from "@wavesrcool/flows-functions";

export class FlowsCoreDatabasePostgreSQLConnection {
  private db: ReturnType<typeof FlowsFunctionsDatabaseConnection>;

  constructor(f: ReturnType<typeof FlowsFunctionsDatabaseConnection>) {
    this.db = f;
  }
}
