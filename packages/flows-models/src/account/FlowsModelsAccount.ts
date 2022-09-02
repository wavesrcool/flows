import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { FlowsModelsEmailLocal } from "../email-local/FlowsModelsEmailLocal";
import { FlowsModelsAccountRecords } from "./_objects/records/FlowsModelsAccountRecords";

@ObjectType()
@Entity()
export class FlowsModelsAccount extends BaseEntity {
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
  //  fields
  //
  // * * * * * * * * * * * * * * * * * * *

  @Field(() => String)
  @Column({ type: "varchar", unique: true })
  value!: string;

  @Field(() => Boolean)
  @Column({ type: "boolean", default: false })
  isAdmin!: boolean;

  @Field(() => Boolean)
  @Column({ type: "boolean", default: false })
  locked!: boolean;

  @Field(() => String, { nullable: true })
  @Column({ type: "varchar", nullable: true })
  lockedDate!: string | null;

  @Field(() => [String], { nullable: true })
  ipList!: string[] | null;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  records
  //
  // * * * * * * * * * * * * * * * * * * *
  @Field(() => FlowsModelsAccountRecords, { nullable: true })
  @Column({ type: "json", nullable: true })
  records!: FlowsModelsAccountRecords | null;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  relations
  //
  // * * * * * * * * * * * * * * * * * * *

  @Field(() => [FlowsModelsEmailLocal])
  @OneToMany(() => FlowsModelsEmailLocal, (local) => local.account)
  locals!: FlowsModelsEmailLocal[];
}
