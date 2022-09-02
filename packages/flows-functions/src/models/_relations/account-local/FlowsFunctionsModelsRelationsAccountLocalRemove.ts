import {
  FlowsModelsAccount,
  FlowsModelsEmailLocal,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsAccountLocalRemove = {
  ds: DataSource;
  pkAccount: number;
  pkLocal: number;
};

export const FlowsFunctionsModelsRelationsAccountLocalRemove = async ({
  ds,
  pkAccount,
  pkLocal,
}: TypesFiguresFlowsFunctionsModelsRelationsAccountLocalRemove): Promise<boolean> => {
  try {
    await ds
      .createQueryBuilder()
      .relation(FlowsModelsAccount, "locals")
      .of(pkAccount)
      .remove(pkLocal);

    await ds
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
