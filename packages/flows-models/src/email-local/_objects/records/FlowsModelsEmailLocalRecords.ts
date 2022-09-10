import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsModelsEmailLocalRecords {
  @Field(() => String)
  localContactName!: string;

  @Field(() => String)
  replyToLocal!: string;
}
