import { Ctx, Query, Resolver } from "type-graphql";
import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraphAccounts0000e } from "./FlowsFunctionsGraphAccounts0000.evaluate";
import { FlowsFunctionsGraphAccounts0000Response } from "./FlowsFunctionsGraphAccounts0000Response.class";

@Resolver()
export class FlowsFunctionsGraphAccounts0000 {
  @Query(() => FlowsFunctionsGraphAccounts0000Response)
  async FlowsFunctionsGraphAccounts0000(
    @Ctx() ctx: TypesFlowsFunctionsGraphInstancesAccountsContext
  ): Promise<FlowsFunctionsGraphAccounts0000Response> {
    try {
      const evaluate = await FlowsFunctionsGraphAccounts0000e(ctx);
      return evaluate;
    } catch (e0000r) {
      console.log(e0000r, `e0000r`);
      return {
        pass: false,
        message: "^flow-graph",
        timestamp: Date.now(),
      };
    }
  }
}
