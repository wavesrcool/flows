import {
  FlowsModelsEmailLocal,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsLocalMessageCreate = {
  connection: DataSource;
  pkLocal: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsLocalMessageCreate = async ({
  connection,
  pkLocal,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsLocalMessageCreate): Promise<boolean> => {
  try {
    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailLocal, "messages")
      .of(pkLocal)
      .add(pkMessage);

    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailMessage, "local")
      .of(pkMessage)
      .set(pkLocal);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsLocalMessageCreate");
    return false;
  }
};
