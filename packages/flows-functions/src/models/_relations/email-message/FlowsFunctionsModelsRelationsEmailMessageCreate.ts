import { FlowsModelsEmail, FlowsModelsMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsEmailMessageCreate = {
  ds: DataSource;
  pkEmail: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsEmailMessageCreate = async ({
  ds,
  pkEmail,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsEmailMessageCreate): Promise<boolean> => {
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
    console.log(e, "FlowsFunctionsModelsRelationsEmailMessageCreate");
    return false;
  }
};
