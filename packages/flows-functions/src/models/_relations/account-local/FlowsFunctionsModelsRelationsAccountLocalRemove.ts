import { FlowsModelsAccount, FlowsModelsLocal } from "@wavesrcool/flows-models";
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
      .relation(FlowsModelsAccount, "account")
      .of(pkAccount)
      .remove(pkLocal);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsLocal, "local")
      .of(pkLocal)
      .set(null);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsAccountLocalRemove");
    return false;
  }
};
