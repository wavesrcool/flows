import { FlowsModelsEmail, FlowsModelsMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsEmailLocalCreate = {
  ds: DataSource;
  pkEmail: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsEmailLocalCreate = async ({
  ds,
  pkEmail,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsEmailLocalCreate): Promise<boolean> => {
  try {
    await ds
      .createQueryBuilder()
      .relation(FlowsModelsEmail, "email")
      .of(pkEmail)
      .add(pkMessage);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsMessage, "message")
      .of(pkMessage)
      .set(pkEmail);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsEmailLocalCreate");
    return false;
  }
};
