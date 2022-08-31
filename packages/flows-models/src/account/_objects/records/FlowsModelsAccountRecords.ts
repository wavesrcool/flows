import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsModelsAccountRecords {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
