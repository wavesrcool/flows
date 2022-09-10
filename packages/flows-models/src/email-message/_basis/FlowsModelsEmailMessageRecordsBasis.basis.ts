import { Field } from "type-graphql";

export class FlowsModelsEmailMessageRecordsBasis {
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
