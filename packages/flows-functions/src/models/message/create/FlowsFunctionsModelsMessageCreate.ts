import {
  FlowsModelsEmailMessageCreateInput,
  FlowsModelsEmailMessage,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsMessageCreate = {
  input: FlowsModelsEmailMessageCreateInput;
  ds: DataSource;
};

export const FlowsFunctionsModelsMessageCreate = async ({
  ds,
  input: { records },
}: TypesFiguresFlowsFunctionsModelsMessageCreate): Promise<
  number | undefined
> => {
  try {
    const create = await ds
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
    console.log(e, "FlowsFunctionsModelsMessageCreate");
    return undefined;
  }
};
