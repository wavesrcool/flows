import { DataSource } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { FlowsFunctionsGraphAccounts0000 } from "../../resolvers/accounts/0000/FlowsFunctionsGraphAccounts0000.resolver";
import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "./TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraphAccounts0001 } from "../../resolvers/accounts/0001/FlowsFunctionsGraphAccounts0001.resolver";

export type TypesFiguresFlowsFunctionsGraphInstancesAccounts = {
  connection: DataSource;
};

export const FlowsFunctionsGraphInstancesAccounts = async ({
  connection,
}: TypesFiguresFlowsFunctionsGraphInstancesAccounts): Promise<
  ApolloServer | undefined
> => {
  try {
    const apollo = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          FlowsFunctionsGraphAccounts0000,
          FlowsFunctionsGraphAccounts0001,
        ],
        scalarsMap: [],
        validate: false,
      }),
      playground: false,
      context: async ({
        req,
        res,
      }): Promise<TypesFlowsFunctionsGraphInstancesAccountsContext> => {
        return {
          req,
          res,
          connection,
        };
      },
    });

    return apollo;
  } catch (e) {
    console.log(e, "FlowsFunctionsGraphInstancesAccounts");
    return undefined;
  }
};
