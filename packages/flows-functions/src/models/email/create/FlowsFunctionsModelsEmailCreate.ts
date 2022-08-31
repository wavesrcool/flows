import {
  FlowsModelsEmailCreateInput,
  FlowsModelsEmail,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailCreate = {
  input: FlowsModelsEmailCreateInput;
  ds: DataSource;
};

export const FlowsFunctionsModelsEmailCreate = async ({
  ds,
  input: { address, ipAddress, records },
}: TypesFiguresFlowsFunctionsModelsEmailCreate): Promise<
  number | undefined
> => {
  try {
    const ipList = [ipAddress];

    const create = await ds
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsEmail)
      .values({ address, ipList, records })
      .execute();

    const { id: pkCreate } = create.raw[0];

    if (!pkCreate) {
      return undefined;
    }

    return pkCreate;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailCreate");
    return undefined;
  }
};
