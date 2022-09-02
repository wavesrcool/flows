import {
  FlowsModelsEmailAddress,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
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
      .relation(FlowsModelsEmailAddress, "messages")
      .of(pkEmail)
      .add(pkMessage);

    await ds
      .createQueryBuilder()
      .relation(FlowsModelsEmailMessage, "email")
      .of(pkMessage)
      .set(pkEmail);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsEmailMessageCreate");
    return false;
  }
};
