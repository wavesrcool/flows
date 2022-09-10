import { Field, InputType } from "type-graphql";
import { FlowsModelsAccountRecordsInput } from "../records/FlowsModelsAccountRecordsInput";

@InputType()
export class FlowsModelsAccountCreateInput {
  @Field(() => String)
  value!: string;

  @Field(() => String)
  ipAddress!: string;

  @Field(() => String)
  password!: string;

  @Field(() => FlowsModelsAccountRecordsInput)
  records!: FlowsModelsAccountRecordsInput;
}
