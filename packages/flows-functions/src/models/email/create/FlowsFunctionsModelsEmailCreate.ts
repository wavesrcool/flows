import {
  FlowsModelsEmailAddressCreateInput,
  FlowsModelsEmailAddress,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailCreate = {
  input: FlowsModelsEmailAddressCreateInput;
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
      .into(FlowsModelsEmailAddress)
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
