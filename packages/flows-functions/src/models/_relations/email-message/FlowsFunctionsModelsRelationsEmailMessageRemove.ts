import {
  FlowsModelsEmailAddress,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsEmailMessageRemove = {
  connection: DataSource;
  pkEmail: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsEmailMessageRemove = async ({
  connection,
  pkEmail,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsEmailMessageRemove): Promise<boolean> => {
  try {
    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailAddress, "messages")
      .of(pkEmail)
      .remove(pkMessage);

    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailMessage, "email")
      .of(pkMessage)
      .set(null);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsRelationsEmailMessageRemove");
    return false;
  }
};
