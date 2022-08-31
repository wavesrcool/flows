import { Field, InputType } from "type-graphql";
import { FlowsModelsAccountRecordsInput } from "../records/FlowsModelsAccountRecordsInput";

@InputType()
export class FlowsModelsAccountCreateInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  ipAddress!: string;

  @Field(() => FlowsModelsAccountRecordsInput)
  records!: FlowsModelsAccountRecordsInput;
}
