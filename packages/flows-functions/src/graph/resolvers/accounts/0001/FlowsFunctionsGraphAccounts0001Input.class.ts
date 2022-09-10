import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsFunctionsGraphAccounts0001Input {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  email!: string;
}
