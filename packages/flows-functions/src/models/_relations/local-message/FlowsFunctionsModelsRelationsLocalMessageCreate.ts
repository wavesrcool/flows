import { FlowsModelsLocal, FlowsModelsMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsLocalMessageCreate = {
  ds: DataSource;
  pkLocal: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsLocalMessageCreate = async ({
  ds,
  pkLocal,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsLocalMessageCreate): Promise<boolean> => {
  try {
    await ds
      .createQueryBuilder()
      .relation(FlowsModelsLocal, "local")
      .of(pkLocal)
      .add(pkMessage);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsMessage, "message")
      .of(pkMessage)
      .set(pkLocal);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsLocalMessageCreate");
    return false;
  }
};
