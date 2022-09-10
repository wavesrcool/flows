import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsModelsEmailLocalRecords {
  @Field(() => String)
  contactName!: string;

  @Field(() => String)
  replyToLocal!: string;
}
