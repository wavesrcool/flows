import { Field, InputType } from "type-graphql";
import { FlowsModelsEmailRecordsInput } from "../records/FlowsModelsEmailRecordsInput";

@InputType()
export class FlowsModelsEmailCreateInput {
  @Field(() => String)
  address!: string;

  @Field(() => String)
  ipAddress!: string;

  @Field(() => FlowsModelsEmailRecordsInput, { nullable: true })
  records?: FlowsModelsEmailRecordsInput | null;
}
