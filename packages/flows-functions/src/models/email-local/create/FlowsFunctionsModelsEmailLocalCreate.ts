import {
  FlowsModelsEmailLocalCreateInput,
  FlowsModelsEmailLocal,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailLocalCreate = {
  input: FlowsModelsEmailLocalCreateInput;
  connection: DataSource;
};

export const FlowsFunctionsModelsEmailLocalCreate = async ({
  connection,
  input: { value, records },
}: TypesFiguresFlowsFunctionsModelsEmailLocalCreate): Promise<
  number | undefined
> => {
  try {
    const create = await connection
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsEmailLocal)
      .values({ value, records })
      .execute();

    const { id: pkCreate } = create.raw[0];

    if (!pkCreate) {
      return undefined;
    }

    return pkCreate;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailLocalCreate");
    return undefined;
  }
};
