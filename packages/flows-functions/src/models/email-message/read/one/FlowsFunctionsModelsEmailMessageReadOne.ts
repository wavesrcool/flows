import { FlowsModelsEmailMessage } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsEmailMessageReadOne } from "./TypesFiguresFlowsFunctionsModelsEmailMessageReadOne";

export const FlowsFunctionsModelsEmailMessageReadOne = async ({
  connection,
  key,
}: TypesFiguresFlowsFunctionsModelsEmailMessageReadOne): Promise<
  FlowsModelsEmailMessage | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("local")
      .from(FlowsModelsEmailMessage, "message")
      .where("message.key = :key", { key })
      .getOne();

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailMessageReadOne");
    return undefined;
  }
};
