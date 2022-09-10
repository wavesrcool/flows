import { Field } from "type-graphql";

export class FlowsModelsEmailAddressRecordsBasis {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
