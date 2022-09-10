import { FlowsModelsAccount } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsAccountReadAll } from "./TypesFiguresFlowsFunctionsModelsAccountReadAll";

export const FlowsFunctionsModelsAccountReadAll = async ({
  connection,
}: TypesFiguresFlowsFunctionsModelsAccountReadAll): Promise<
  FlowsModelsAccount[] | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("account")
      .from(FlowsModelsAccount, "account")
      .getMany();

    if (!read || !read.length) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsAccountReadAll");
    return undefined;
  }
};
