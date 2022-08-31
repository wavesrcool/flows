import { Field, InputType } from "type-graphql";

@InputType()
export class FlowsModelsMessageRecordsInput {
  @Field(() => String)
  subject!: string;

  @Field(() => String)
  strippedText!: string;

  @Field(() => String, { nullable: true })
  strippedSignature!: string;

  @Field(() => String)
  signature!: string;

  @Field(() => String)
  timestamp!: string;

  @Field(() => String)
  token!: string;
}
