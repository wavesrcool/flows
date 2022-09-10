import {
  FlowsModelsEmailAddressCreateInput,
  FlowsModelsEmailAddress,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailAddressCreate = {
  input: FlowsModelsEmailAddressCreateInput;
  connection: DataSource;
};

export const FlowsFunctionsModelsEmailAddressCreate = async ({
  connection,
  input,
}: TypesFiguresFlowsFunctionsModelsEmailAddressCreate): Promise<
  number | undefined
> => {
  try {
    const { address: value, ipAddress, records } = input;
    const ipList = [ipAddress];

    const create = await connection
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsEmailAddress)
      .values({ value, ipList, records })
      .execute();

    console.log(
      JSON.stringify(create, null, 4),
      `create FlowsFunctionsModelsEmailAddressCreate`
    );

    const { id: pkCreate } = create.raw[0];

    if (!pkCreate) {
      return undefined;
    }

    return pkCreate;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailAddressCreate");
    return undefined;
  }
};
