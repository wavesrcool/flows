import { Ctx, Query, Resolver } from "type-graphql";
import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraph0000e } from "./FlowsFunctionsGraph0000.evaluate";
import { FlowsFunctionsGraph0000Response } from "./FlowsFunctionsGraph0000Response.class";

@Resolver()
export class FlowsFunctionsGraph0000 {
  @Query(() => FlowsFunctionsGraph0000Response)
  async FlowsFunctionsGraph0000(
    @Ctx() ctx: TypesFlowsFunctionsGraphInstancesAccountsContext
  ): Promise<FlowsFunctionsGraph0000Response> {
    try {
      const evaluate = await FlowsFunctionsGraph0000e(ctx);
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
