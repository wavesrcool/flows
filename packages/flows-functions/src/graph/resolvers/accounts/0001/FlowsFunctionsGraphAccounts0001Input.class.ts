import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsFunctionsGraphAccounts0001Input {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  emailAddress!: string;

  @Field(() => String)
  emailLocal!: string;

  @Field(() => String)
  account!: string;

  @Field(() => String)
  password!: string;
}
