import { FlowsModelsEmailMessage } from "@wavesrcool/flows-models";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsModelsEmailMessageReadKey = {
  key: string;
  connection: DataSource;
};

export const FlowsFunctionsModelsEmailMessageReadKey = async ({
  connection,
  key,
}: TypesFiguresFlowsFunctionsModelsEmailMessageReadKey): Promise<
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
    console.log(e, "FlowsFunctionsModelsEmailMessageReadKey");
    return undefined;
  }
};
