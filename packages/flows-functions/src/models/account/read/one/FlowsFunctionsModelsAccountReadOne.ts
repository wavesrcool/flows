import { FlowsModelsAccount } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsAccountReadOne } from "./TypesFiguresFlowsFunctionsModelsAccountReadOne";

export const FlowsFunctionsModelsAccountReadOne = async ({
  connection,
  value,
}: TypesFiguresFlowsFunctionsModelsAccountReadOne): Promise<
  FlowsModelsAccount | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("account")
      .from(FlowsModelsAccount, "account")
      .where("account.value = :value", { value })
      .getOne();

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsAccountReadOne");
    return undefined;
  }
};
