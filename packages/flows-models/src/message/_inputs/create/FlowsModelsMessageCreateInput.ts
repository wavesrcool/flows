import { Field, InputType } from "type-graphql";
import { FlowsModelsMessageRecordsInput } from "../records/FlowsModelsMessageRecordsInput";

@InputType()
export class FlowsModelsMessageCreateInput {
  @Field(() => FlowsModelsMessageRecordsInput)
  records!: FlowsModelsMessageRecordsInput;
}
