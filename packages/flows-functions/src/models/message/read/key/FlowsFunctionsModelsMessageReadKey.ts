import { FlowsModelsMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsMessageReadKey = {
  key: string;
  ds: DataSource;
};

export const FlowsFunctionsModelsMessageReadKey = async ({
  ds,
  key,
}: TypesFiguresFlowsFunctionsModelsMessageReadKey): Promise<
  FlowsModelsMessage | undefined
> => {
  try {
    const read = await ds
      .createQueryBuilder()
      .select("local")
      .from(FlowsModelsMessage, "message")
      .where("message.key = :key", { key })
      .getOne();

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsMessageReadKey");
    return undefined;
  }
};
