import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsEmailLocalCreateInput {
  @Field(() => String)
  value!: string;
}
