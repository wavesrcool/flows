import { FlowsModelsEmailAddress } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailRead = {
  address: string;
  connection: DataSource;
};

export const FlowsFunctionsModelsEmailRead = async ({
  connection,
  address,
}: TypesFiguresFlowsFunctionsModelsEmailRead): Promise<
  FlowsModelsEmailAddress | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("email")
      .from(FlowsModelsEmailAddress, "email")
      .where("email.address = :address", { address })
      .getOne();

    console.log(
      JSON.stringify(read, null, 4),
      `read FlowsFunctionsModelsEmailRead`
    );

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailRead");
    return undefined;
  }
};
