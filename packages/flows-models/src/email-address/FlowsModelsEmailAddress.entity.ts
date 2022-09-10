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
import { FlowsModelsEmailMessage } from "../email-message/FlowsModelsEmailMessage.entity";
import { FlowsModelsEmailAddressRecords } from "./_objects/records/FlowsModelsEmailAddressRecords";

@ObjectType()
@Entity()
export class FlowsModelsEmailAddress extends BaseEntity {
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
  @Field(() => FlowsModelsEmailAddressRecords, { nullable: true })
  @Column({ type: "json", nullable: true })
  records!: FlowsModelsEmailAddressRecords | null;

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  relations
  //
  // * * * * * * * * * * * * * * * * * * *

  @Field(() => [FlowsModelsEmailMessage])
  @OneToMany(() => FlowsModelsEmailMessage, (message) => message.email)
  messages!: FlowsModelsEmailMessage[];
}
