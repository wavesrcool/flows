import { FlowsModelsEmail, FlowsModelsMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsEmailLocalRemove = {
  ds: DataSource;
  pkEmail: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsEmailLocalRemove = async ({
  ds,
  pkEmail,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsEmailLocalRemove): Promise<boolean> => {
  try {
    await ds
      .createQueryBuilder()
      .relation(FlowsModelsEmail, "email")
      .of(pkEmail)
      .remove(pkMessage);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsMessage, "message")
      .of(pkMessage)
      .set(null);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsEmailLocalRemove");
    return false;
  }
};
