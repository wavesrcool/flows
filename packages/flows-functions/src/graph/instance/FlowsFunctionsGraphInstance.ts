import { DataSource } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TypesFlowsFunctionsGraphInstanceContext } from "./TypesFlowsFunctionsGraphInstanceContext";
import { FlowsFunctionsGraph0000 } from "../resolvers/0000/FlowsFunctionsGraph0000.resolver";
import { FlowsFunctionsGraph0001 } from "../resolvers/0001/FlowsFunctionsGraph0001.resolver";

export type TypesFiguresFlowsFunctionsGraphInstance = {
  connection: DataSource;
};

export const FlowsFunctionsGraphInstance = async ({
  connection,
}: TypesFiguresFlowsFunctionsGraphInstance): Promise<
  ApolloServer | undefined
> => {
  try {
    const apollo = new ApolloServer({
      schema: await buildSchema({
        resolvers: [FlowsFunctionsGraph0000, FlowsFunctionsGraph0001],
        scalarsMap: [],
        validate: false,
      }),
      playground: false,
      context: async ({
        req,
        res,
      }): Promise<TypesFlowsFunctionsGraphInstanceContext> => {
        return {
          req,
          res,
          connection,
        };
      },
    });

    return apollo;
  } catch (e) {
    console.log(e, "FlowsFunctionsGraphInstance");
    return undefined;
  }
};
