import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { FlowsModelsEmailAddress } from "../email-address/FlowsModelsEmailAddress";
import { FlowsModelsEmailLocal } from "../email-local/FlowsModelsEmailLocal";
import { FlowsModelsEmailMessageRecords } from "./_objects/records/FlowsModelsEmailMessageRecords";

@ObjectType()
@Entity()
export class FlowsModelsEmailMessage extends BaseEntity {
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

  @Field(() => FlowsModelsEmailMessageRecords, { nullable: true })
  @Column({ type: "json", nullable: true })
  records!: FlowsModelsEmailMessageRecords | null;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  relations
  //
  // * * * * * * * * * * * * * * * * * * *

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  emailId!: number;

  @Field(() => FlowsModelsEmailAddress)
  @ManyToOne(() => FlowsModelsEmailAddress, (email) => email.messages)
  email!: FlowsModelsEmailAddress;

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  localId!: number;

  @Field(() => FlowsModelsEmailLocal)
  @ManyToOne(() => FlowsModelsEmailLocal, (local) => local.messages)
  local!: FlowsModelsEmailLocal;
}
