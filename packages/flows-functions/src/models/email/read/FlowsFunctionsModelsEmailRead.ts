import { FlowsModelsEmail } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailRead = {
  address: string;
  ds: DataSource;
};

export const FlowsFunctionsModelsEmailRead = async ({
  ds,
  address,
}: TypesFiguresFlowsFunctionsModelsEmailRead): Promise<
  FlowsModelsEmail | undefined
> => {
  try {
    const read = await ds
      .createQueryBuilder()
      .select("email")
      .from(FlowsModelsEmail, "email")
      .where("email.address = :address", { address })
      .getOne();

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailRead");
    return undefined;
  }
};