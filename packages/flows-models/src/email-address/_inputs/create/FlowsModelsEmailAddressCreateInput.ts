import { Field, InputType } from "type-graphql";
import { FlowsModelsEmailAddressRecordsInput } from "../records/FlowsModelsEmailAddressRecordsInput";

@InputType()
export class FlowsModelsEmailAddressCreateInput {
  @Field(() => String)
  address!: string;

  @Field(() => String)
  ipAddress!: string;

  @Field(() => FlowsModelsEmailAddressRecordsInput, { nullable: true })
  records?: FlowsModelsEmailAddressRecordsInput | null;
}
