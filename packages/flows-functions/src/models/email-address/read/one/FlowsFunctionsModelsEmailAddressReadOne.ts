import { FlowsModelsEmailAddress } from "@wavesrcool/flows-models";
import { TypesFiguresFlowsFunctionsModelsEmailAddressReadOne } from "./TypesFiguresFlowsFunctionsModelsEmailAddressReadOne";

export const FlowsFunctionsModelsEmailAddressReadOne = async ({
  connection,
  value,
}: TypesFiguresFlowsFunctionsModelsEmailAddressReadOne): Promise<
  FlowsModelsEmailAddress | undefined
> => {
  try {
    const read = await connection
      .createQueryBuilder()
      .select("email")
      .from(FlowsModelsEmailAddress, "email")
      .where("email.value = :value", { value })
      .getOne();

    console.log(
      JSON.stringify(read, null, 4),
      `read FlowsFunctionsModelsEmailAddressReadOne`
    );

    if (!read || !read.id) {
      return undefined;
    }

    return read;
  } catch (e) {
    console.log(e, "FlowsFunctionsModelsEmailAddressReadOne");
    return undefined;
  }
};
