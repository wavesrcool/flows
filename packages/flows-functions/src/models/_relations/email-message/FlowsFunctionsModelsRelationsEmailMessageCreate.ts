import {
  FlowsModelsEmailAddress,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsRelationsEmailMessageCreate = {
  connection: DataSource;
  pkEmail: number;
  pkMessage: number;
};

export const FlowsFunctionsModelsRelationsEmailMessageCreate = async ({
  connection,
  pkEmail,
  pkMessage,
}: TypesFiguresFlowsFunctionsModelsRelationsEmailMessageCreate): Promise<boolean> => {
  try {
    await connection
      .createQueryBuilder()
      .relation(FlowsModelsEmailAddress, "messages")
      .of(pkEmail)
      .add(pkMessage);

    await connection
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
