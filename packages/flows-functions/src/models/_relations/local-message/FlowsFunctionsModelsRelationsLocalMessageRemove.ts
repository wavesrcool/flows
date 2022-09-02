import {
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsLocalMessageRemove = {
  ds: DataSource;
  pkLocal: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsLocalMessageRemove = async ({
  ds,
  pkLocal,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsLocalMessageRemove): Promise<boolean> => {
  try {
    await ds
      .createQueryBuilder()
      .relation(FlowsModelsEmailLocal, "messages")
      .of(pkLocal)
      .remove(pkMessage);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsEmailMessage, "local")
      .of(pkMessage)
      .set(null);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsLocalMessageRemove");
    return false;
  }
};
