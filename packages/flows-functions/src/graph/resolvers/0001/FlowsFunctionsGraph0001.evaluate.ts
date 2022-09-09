import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraph0001Input } from "./FlowsFunctionsGraph0001Input.class";
import { FlowsFunctionsGraph0001Response } from "./FlowsFunctionsGraph0001Response.class";
import { TypesFlowsGraphComplete0001 } from "./TypesFlowsGraphComplete0001";

export const FlowsFunctionsGraph0001e = async (
  ctx: TypesFlowsFunctionsGraphInstancesAccountsContext,
  flow: FlowsFunctionsGraph0001Input
): Promise<FlowsFunctionsGraph0001Response> => {
  try {
    console.log(!!ctx, `0001`);
    console.log(!!flow, `0001`);

    const complete: TypesFlowsGraphComplete0001 = {
      pass: true,
      message: "complete",
      timestamp: Date.now(),
    };

    return complete;
  } catch (e0000e) {
    console.log(e0000e, `e0000e`);
    return {
      pass: false,
      message: "^flowmail-e",
      timestamp: Date.now(),
    };
  }
};
