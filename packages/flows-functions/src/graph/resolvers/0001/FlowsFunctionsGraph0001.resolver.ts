import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraph0001e } from "./FlowsFunctionsGraph0001.evaluate";
import { FlowsFunctionsGraph0001Input } from "./FlowsFunctionsGraph0001Input.class";
import { FlowsFunctionsGraph0001Response } from "./FlowsFunctionsGraph0001Response.class";

/**
 * Identity of model Account
 */
@Resolver()
export class FlowsFunctionsGraph0001 {
  @Mutation(() => FlowsFunctionsGraph0001Response)
  async FlowsFunctionsGraph0001(
    @Arg("flow", () => FlowsFunctionsGraph0001Input)
    flow: FlowsFunctionsGraph0001Input,
    @Ctx() ctx: TypesFlowsFunctionsGraphInstancesAccountsContext
  ): Promise<FlowsFunctionsGraph0001Response> {
    try {
      const evaluate = await FlowsFunctionsGraph0001e(ctx, flow);
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
