import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsEmailRecordsInput {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
