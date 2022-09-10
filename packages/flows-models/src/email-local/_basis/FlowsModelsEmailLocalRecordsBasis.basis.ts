import { Field } from "type-graphql";

export class FlowsModelsEmailLocalRecordsBasis {
  @Field(() => String)
  contactName!: string;

  @Field(() => String)
  replyToLocal!: string;
}
