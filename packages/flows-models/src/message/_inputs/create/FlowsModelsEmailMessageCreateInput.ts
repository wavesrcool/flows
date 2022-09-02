import { Field, InputType } from "type-graphql";
import { FlowsModelsEmailMessageRecordsInput } from "../records/FlowsModelsEmailMessageRecordsInput";

@InputType()
export class FlowsModelsEmailMessageCreateInput {
  @Field(() => FlowsModelsEmailMessageRecordsInput)
  records!: FlowsModelsEmailMessageRecordsInput;
}
