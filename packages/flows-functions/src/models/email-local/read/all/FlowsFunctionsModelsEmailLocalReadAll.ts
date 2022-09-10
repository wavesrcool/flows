import { FlowsModelsEmailLocal } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsEmailLocalReadAll } from "./TypesFiguresFlowsFunctionsModelsEmailLocalReadAll";

export const FlowsFunctionsModelsEmailLocalReadAll = async ({
  connection,
}: TypesFiguresFlowsFunctionsModelsEmailLocalReadAll): Promise<
  FlowsModelsEmailLocal[] | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("local")
      .from(FlowsModelsEmailLocal, "local")
      .getMany();

    if (!read || !read.length) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailLocalReadAll");
    return undefined;
  }
};
