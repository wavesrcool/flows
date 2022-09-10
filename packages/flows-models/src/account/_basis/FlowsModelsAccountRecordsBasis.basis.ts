import { Field } from "type-graphql";

export class FlowsModelsAccountRecordsBasis {
  @Field(() => String)
  nameFirst!: string;

  @Field(() => String)
  nameLast!: string;
}
