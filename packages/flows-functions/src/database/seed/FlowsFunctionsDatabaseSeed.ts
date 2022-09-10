import { FlowsFunctionsModelsAccountCreateAdmin } from "../../models/account/create/admin/FlowsFunctionsModelsAccountCreateAdmin";
import { FlowsFunctionsModelsAccountReadAll } from "../../models/account/read/all/FlowsFunctionsModelsAccountReadAll";
import { TypesFiguresFlowsFunctionsDatabaseSeed } from "./TypesFiguresFlowsFunctionsDatabaseSeed";

export const FlowsFunctionsDatabaseSeed = async ({
  connection,
  input,
}: TypesFiguresFlowsFunctionsDatabaseSeed): Promise<boolean> => {
  try {
    const accounts = await FlowsFunctionsModelsAccountReadAll({ connection });

    if (accounts) {
      console.log(
        JSON.stringify(accounts, null, 4),
        `FlowsFunctionsDatabaseSeed accounts`
      );
      console.log(`[flows]: Seeding Database. Failure.`);
      return false;
    }

    console.log(`[flows]: Seeding Database. Account: "${input.value}"`);

    const modelsCreateAccountAdmin =
      await FlowsFunctionsModelsAccountCreateAdmin({ connection, input });

    if (
      !modelsCreateAccountAdmin ||
      !(typeof modelsCreateAccountAdmin === "number") ||
      !(modelsCreateAccountAdmin === 1)
    ) {
      return false;
    }

    console.log(`[flows]: Seeding Database. Complete.`);

    return true;
  } catch (e) {
    console.log(e, "FlowsFunctionsDatabaseSeed");
    return false;
  }
};
