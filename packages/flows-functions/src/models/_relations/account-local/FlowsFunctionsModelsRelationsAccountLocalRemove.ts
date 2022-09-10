import {
  FlowsModelsAccount,
  FlowsModelsEmailLocal,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsAccountLocalRemove = {
  connection: DataSource;
  pkAccount: number;
  pkLocal: number;
};

export const FlowsFunctionsModelsRelationsAccountLocalRemove = async ({
  connection,
  pkAccount,
  pkLocal,
}: TypesFiguresFlowsFunctionsModelsRelationsAccountLocalRemove): Promise<boolean> => {
  try {
    await connection
      .createQueryBuilder()
      .relation(FlowsModelsAccount, "locals")
      .of(pkAccount)
      .remove(pkLocal);

    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailLocal, "account")
      .of(pkLocal)
      .set(null);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsAccountLocalRemove");
    return false;
  }
};
