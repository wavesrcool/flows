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
import { FlowsModelsEmailRecords } from "./_objects/records/FlowsModelsEmailRecords";

@ObjectType()
@Entity()
export class FlowsModelsEmail extends BaseEntity {
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
  address!: string;

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
  @Field(() => FlowsModelsEmailRecords, { nullable: true })
  @Column({ type: "json", nullable: true })
  records!: FlowsModelsEmailRecords | null;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  relations
  //
  // * * * * * * * * * * * * * * * * * * *
}
