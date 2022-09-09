import { FlowsModelsAccount } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsAccountRead = {
  value: string;
  connection: DataSource;
};

export const FlowsFunctionsModelsAccountRead = async ({
  connection,
  value,
}: TypesFiguresFlowsFunctionsModelsAccountRead): Promise<
  FlowsModelsAccount | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("account")
      .from(FlowsModelsAccount, "account")
      .where("account.value = :value", { value })
      .getOne();

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsAccountRead");
    return undefined;
  }
};
