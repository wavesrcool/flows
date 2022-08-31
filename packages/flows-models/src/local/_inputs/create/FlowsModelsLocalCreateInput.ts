import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsLocalCreateInput {
  @Field(() => String)
  value!: string;
}
