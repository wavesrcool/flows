import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsEmailLocalRecordsInput {
  @Field(() => String)
  contactName!: string;

  @Field(() => String)
  replyToLocal!: string;
}
