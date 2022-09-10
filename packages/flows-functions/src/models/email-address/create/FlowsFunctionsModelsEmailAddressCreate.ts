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
  input: { address, ipAddress, records },
}: TypesFiguresFlowsFunctionsModelsEmailAddressCreate): Promise<
  number | undefined
> => {
  try {
    const ipList = [ipAddress];

    const create = await connection
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsEmailAddress)
      .values({ address, ipList, records })
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
