import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsEmailAddressRecordsInput {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
