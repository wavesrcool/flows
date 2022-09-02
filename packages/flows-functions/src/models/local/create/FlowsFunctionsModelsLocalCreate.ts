import {
  FlowsModelsEmailLocalCreateInput,
  FlowsModelsEmailLocal,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsLocalCreate = {
  input: FlowsModelsEmailLocalCreateInput;
  ds: DataSource;
};

export const FlowsFunctionsModelsLocalCreate = async ({
  ds,
  input: { value },
}: TypesFiguresFlowsFunctionsModelsLocalCreate): Promise<
  number | undefined
> => {
  try {
    const create = await ds
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsEmailLocal)
      .values({ value })
      .execute();

    const { id: pkCreate } = create.raw[0];

    if (!pkCreate) {
      return undefined;
    }

    return pkCreate;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsLocalCreate");
    return undefined;
  }
};
