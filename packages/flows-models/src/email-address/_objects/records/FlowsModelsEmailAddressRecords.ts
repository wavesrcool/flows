import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsModelsEmailAddressRecords {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
