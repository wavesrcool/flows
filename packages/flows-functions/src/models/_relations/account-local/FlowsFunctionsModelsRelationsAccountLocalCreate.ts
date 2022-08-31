import { FlowsModelsAccount, FlowsModelsLocal } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsAccountLocalCreate = {
  ds: DataSource;
  pkAccount: number;
  pkLocal: number;
};

export const FlowsFunctionsModelsRelationsAccountLocalCreate = async ({
  ds,
  pkAccount,
  pkLocal,
}: TypesFiguresFlowsFunctionsModelsRelationsAccountLocalCreate): Promise<boolean> => {
  try {
    await ds
      .createQueryBuilder()
      .relation(FlowsModelsAccount, "locals")
      .of(pkAccount)
      .add(pkLocal);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsLocal, "account")
      .of(pkLocal)
      .set(pkAccount);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsAccountLocalCreate");
    return false;
  }
};
