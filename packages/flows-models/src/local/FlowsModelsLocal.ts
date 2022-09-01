import "reflect-metadata";
import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { FlowsModelsAccount } from "../account/FlowsModelsAccount";
import { FlowsModelsMessage } from "../message/FlowsModelsMessage";

@ObjectType()
@Entity()
export class FlowsModelsLocal extends BaseEntity {
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

  // * * * * * * * * * * * * * * * * * * *
  //
  //
  //  relations
  //
  // * * * * * * * * * * * * * * * * * * *

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  accountId!: number;

  @Field(() => FlowsModelsAccount)
  @ManyToOne(() => FlowsModelsAccount, (account) => account.locals)
  account!: FlowsModelsAccount;

  @Field(() => [FlowsModelsMessage])
  @OneToMany(() => FlowsModelsMessage, (message) => message.local)
  messages!: FlowsModelsMessage[];
}
