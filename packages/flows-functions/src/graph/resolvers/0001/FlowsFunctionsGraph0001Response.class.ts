import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FlowsFunctionsGraph0001Response {
  @Field(() => Boolean)
  pass!: boolean;

  @Field(() => String)
  message!: string;

  @Field(() => Number)
  timestamp!: number;
}
