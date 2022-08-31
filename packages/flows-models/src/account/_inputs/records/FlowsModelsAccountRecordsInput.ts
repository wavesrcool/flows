import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsAccountRecordsInput {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
