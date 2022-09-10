import {
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsLocalMessageRemove = {
  connection: DataSource;
  pkLocal: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsLocalMessageRemove = async ({
  connection,
  pkLocal,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsLocalMessageRemove): Promise<boolean> => {
  try {
    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailLocal, "messages")
      .of(pkLocal)
      .remove(pkMessage);

    await connection
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
