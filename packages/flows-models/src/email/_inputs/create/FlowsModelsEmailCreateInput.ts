import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsEmailCreateInput {
  @Field(() => String)
  address!: string;

  @Field(() => String)
  ipAddress!: string;
}
