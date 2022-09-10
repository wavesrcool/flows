import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraphAccounts0001e } from "./FlowsFunctionsGraphAccounts0001.evaluate";
import { FlowsFunctionsGraphAccounts0001Input } from "./FlowsFunctionsGraphAccounts0001Input.class";
import { FlowsFunctionsGraphAccounts0001Response } from "./FlowsFunctionsGraphAccounts0001Response.class";

/**
 * Identity of model Account
 */
@Resolver()
export class FlowsFunctionsGraphAccounts0001 {
  @Mutation(() => FlowsFunctionsGraphAccounts0001Response)
  async FlowsFunctionsGraphAccounts0001(
    @Arg("flow", () => FlowsFunctionsGraphAccounts0001Input)
    flow: FlowsFunctionsGraphAccounts0001Input,
    @Ctx() ctx: TypesFlowsFunctionsGraphInstancesAccountsContext
  ): Promise<FlowsFunctionsGraphAccounts0001Response> {
    try {
      const evaluate = await FlowsFunctionsGraphAccounts0001e(ctx, flow);
      return evaluate;
    } catch (e0000r) {
      console.log(e0000r, `e0000r`);
      return {
        pass: false,
        message: "^flowmail",
        timestamp: Date.now(),
      };
    }
  }
}
