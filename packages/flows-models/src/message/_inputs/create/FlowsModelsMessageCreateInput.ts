import { Field, InputType } from "type-graphql";
import { FlowsModelsMessageRecordsInput } from "../records/FlowsModelsMessageRecordsInput";

@InputType()
export class FlowsModelsMessageCreateInput {
  @Field(() => String)
  value!: string;

  @Field(() => FlowsModelsMessageRecordsInput)
  records!: FlowsModelsMessageRecordsInput;
}
