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
import { FlowsModelsAccount } from "../account/FlowsModelsAccount.entity";
import { FlowsModelsEmailMessage } from "../email-message/FlowsModelsEmailMessage.entity";
import { FlowsModelsEmailLocalRecords } from "./_objects/records/FlowsModelsEmailLocalRecords";

@ObjectType()
@Entity()
export class FlowsModelsEmailLocal extends BaseEntity {
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
  //  records
  //
  // * * * * * * * * * * * * * * * * * * *
  @Field(() => FlowsModelsEmailLocalRecords, { nullable: true })
  @Column({ type: "json", nullable: true })
  records!: FlowsModelsEmailLocalRecords | null;

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

  @Field(() => [FlowsModelsEmailMessage])
  @OneToMany(() => FlowsModelsEmailMessage, (message) => message.local)
  messages!: FlowsModelsEmailMessage[];
}
