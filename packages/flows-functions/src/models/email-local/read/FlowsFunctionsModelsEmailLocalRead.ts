import { FlowsModelsEmailLocal } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailLocalRead = {
  value: string;
  connection: DataSource;
};

export const FlowsFunctionsModelsEmailLocalRead = async ({
  connection,
  value,
}: TypesFiguresFlowsFunctionsModelsEmailLocalRead): Promise<
  FlowsModelsEmailLocal | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("local")
      .from(FlowsModelsEmailLocal, "local")
      .where("local.value = :value", { value })
      .getOne();

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailLocalRead");
    return undefined;
  }
};
