import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsModelsEmailRecords {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
