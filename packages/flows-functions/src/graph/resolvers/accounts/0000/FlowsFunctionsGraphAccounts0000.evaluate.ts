import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraphAccounts0000Response } from "./FlowsFunctionsGraphAccounts0000Response.class";
import { TypesFlowsGraphComplete0000 } from "./TypesFlowsGraphAccountsComplete0000";

export const FlowsFunctionsGraphAccounts0000e = async ({
  connection,
  res: { locals },
}: TypesFlowsFunctionsGraphInstancesAccountsContext): Promise<FlowsFunctionsGraphAccounts0000Response> => {
  try {
    const { ipAddress } = locals;
    const pass = !!(connection.isInitialized && ipAddress);
    console.log(`[flows-accounts-0000] `, pass, ` ipAddress: ${ipAddress}`);

    const complete: TypesFlowsGraphComplete0000 = {
      pass: pass || true,
      message: `${locals.ipAddress ?? "complete"}`,
      timestamp: Date.now(),
    };

    return complete;
  } catch (e0000e) {
    console.log(e0000e, `e0000e`);
    return {
      pass: false,
      message: "^flow-graph-e",
      timestamp: Date.now(),
    };
  }
};
