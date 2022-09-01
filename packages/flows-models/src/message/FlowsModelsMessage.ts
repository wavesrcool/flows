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
import { FlowsModelsEmail } from "../email/FlowsModelsEmail";
import { FlowsModelsLocal } from "../local/FlowsModelsLocal";
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

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  emailId!: number;

  @Field(() => FlowsModelsEmail)
  @ManyToOne(() => FlowsModelsEmail, (email) => email.messages)
  email!: FlowsModelsEmail;

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  localId!: number;

  @Field(() => FlowsModelsLocal)
  @ManyToOne(() => FlowsModelsLocal, (local) => local.messages)
  local!: FlowsModelsLocal;
}
