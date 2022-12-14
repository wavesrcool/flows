import argon2 from "argon2";
import {
  FlowsModelsAccount,
  FlowsModelsAccountCreateInput,
} from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";
import { v4 } from "uuid";

export type TypesFiguresFlowsFunctionsModelsAccountCreate = {
  input: FlowsModelsAccountCreateInput;
  connection: DataSource;
};

export const FlowsFunctionsModelsAccountCreate = async ({
  connection,
  input,
}: TypesFiguresFlowsFunctionsModelsAccountCreate): Promise<
  number | undefined
> => {
  try {
    const { value, ipAddress, password: password0, records } = input;

    const password = await argon2.hash(password0);

    const ipList = [ipAddress];

    const refreshToken = v4();
    const date = new Date();

    const create = await connection
      .createQueryBuilder()
      .insert()
      .into(FlowsModelsAccount)
      .values({
        value,
        ipList,
        password,
        passwordDate: date.toISOString(),
        isAdmin: false,
        refreshToken,
        refreshTokenDate: date,
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
