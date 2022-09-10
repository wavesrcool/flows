import {
  FlowsModelsAccount,
  FlowsModelsAccountCreateInput,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
import { v4 } from "uuid";

export type TypesFiguresFlowsFunctionsModelsAccountCreate = {
  input: FlowsModelsAccountCreateInput;
  ds: DataSource;
};

export const FlowsFunctionsModelsAccountCreate = async ({
  ds,
  input: { value, ipAddress, isAdmin, records },
}: TypesFiguresFlowsFunctionsModelsAccountCreate): Promise<
  number | undefined
> => {
  try {
    const ipList = [ipAddress];

    const refreshToken = v4();
    const refreshTokenDate = new Date();

    const create = await ds
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsAccount)
      .values({
        value,
        ipList,
        isAdmin,
        refreshToken,
        refreshTokenDate,
        records,
      })
      .execute();

    const { id: pkCreate } = create.raw[0];

    if (!pkCreate) {
      return undefined;
    }

    return pkCreate;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsAccountCreate");
    return undefined;
  }
};
