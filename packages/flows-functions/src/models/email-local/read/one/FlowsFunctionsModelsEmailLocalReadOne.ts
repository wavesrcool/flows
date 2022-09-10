import { FlowsModelsEmailLocal } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsEmailLocalReadOne } from "./TypesFiguresFlowsFunctionsModelsEmailLocalReadOne";

export const FlowsFunctionsModelsEmailLocalReadOne = async ({
  connection,
  value,
}: TypesFiguresFlowsFunctionsModelsEmailLocalReadOne): Promise<
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
    console.log(e, "FlowsFunctionsModelsEmailLocalReadOne");
    return undefined;
  }
};
