import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsEmailLocalRecordsInput {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  replyToLocal!: string;
}
