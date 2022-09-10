import { FlowsModelsAccountCreateInput } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsDatabaseSeed = {
  connection: DataSource;
  input: FlowsModelsAccountCreateInput;
};
