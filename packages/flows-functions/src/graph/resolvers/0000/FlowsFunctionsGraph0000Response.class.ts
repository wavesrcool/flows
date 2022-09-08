import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsFunctionsGraph0000Response {
  @Field(() => Boolean)
  pass!: boolean;

  @Field(() => String)
  message!: string;

  @Field(() => Number)
  timestamp!: number;
}
