import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { FlowsModelsMessageRecords } from "./_objects/records/FlowsModelsMessageRecords";

@ObjectType()
@Entity()
export class FlowsModelsMessage extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => String)
  @Column()
  @Generated("uuid")
  key!: string;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  records
  //
  // * * * * * * * * * * * * * * * * * * *

  @Field(() => FlowsModelsMessageRecords, { nullable: true })
  @Column({ type: "json", nullable: true })
  records!: FlowsModelsMessageRecords | null;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  relations
  //
  // * * * * * * * * * * * * * * * * * * *
}
