import { Field, InputType } from "type-graphql";
import { FlowsModelsEmailLocalRecordsInput } from "../records/FlowsModelsEmailLocalRecordsInput";

@InputType()
export class FlowsModelsEmailLocalCreateInput {
  @Field(() => String)
  value!: string;

  @Field(() => FlowsModelsEmailLocalRecordsInput)
  records!: FlowsModelsEmailLocalRecordsInput;
}
