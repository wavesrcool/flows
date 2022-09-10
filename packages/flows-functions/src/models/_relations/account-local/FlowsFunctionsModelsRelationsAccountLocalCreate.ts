import {
  FlowsModelsAccount,
  FlowsModelsEmailLocal,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsAccountLocalCreate = {
  connection: DataSource;
  pkAccount: number;
  pkLocal: number;
};

export const FlowsFunctionsModelsRelationsAccountLocalCreate = async ({
  connection,
  pkAccount,
  pkLocal,
}: TypesFiguresFlowsFunctionsModelsRelationsAccountLocalCreate): Promise<boolean> => {
  try {
    await connection
      .createQueryBuilder()
      .relation(FlowsModelsAccount, "locals")
      .of(pkAccount)
      .add(pkLocal);

    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailLocal, "account")
      .of(pkLocal)
      .set(pkAccount);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsAccountLocalCreate");
    return false;
  }
};
