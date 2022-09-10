import {
  FlowsModelsEmailMessageCreateInput,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailMessageCreate = {
  input: FlowsModelsEmailMessageCreateInput;
  connection: DataSource;
};

export const FlowsFunctionsModelsEmailMessageCreate = async ({
  connection,
  input: { records },
}: TypesFiguresFlowsFunctionsModelsEmailMessageCreate): Promise<
  number | undefined
> => {
  try {
    const create = await connection
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsEmailMessage)
      .values({ records })
      .execute();

    const { id: pkCreate } = create.raw[0];

    if (!pkCreate) {
      return undefined;
    }

    return pkCreate;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailMessageCreate");
    return undefined;
  }
};
