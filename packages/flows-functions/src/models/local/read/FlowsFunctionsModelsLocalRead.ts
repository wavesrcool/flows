import { FlowsModelsEmailLocal } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsLocalRead = {
  value: string;
  ds: DataSource;
};

export const FlowsFunctionsModelsLocalRead = async ({
  ds,
  value,
}: TypesFiguresFlowsFunctionsModelsLocalRead): Promise<
  FlowsModelsEmailLocal | undefined
> => {
  try {
    const read = await ds
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
    console.log(e, "FlowsFunctionsModelsLocalRead");
    return undefined;
  }
};
