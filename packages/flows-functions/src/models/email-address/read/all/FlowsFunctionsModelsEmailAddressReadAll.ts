import { FlowsModelsEmailAddress } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsEmailAddressReadAll } from "./TypesFiguresFlowsFunctionsModelsEmailAddressReadAll";

export const FlowsFunctionsModelsEmailAddressReadAll = async ({
  connection,
}: TypesFiguresFlowsFunctionsModelsEmailAddressReadAll): Promise<
  FlowsModelsEmailAddress[] | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("email")
      .from(FlowsModelsEmailAddress, "email")
      .getMany();

    if (!read || !read.length) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailAddressReadAll");
    return undefined;
  }
};
