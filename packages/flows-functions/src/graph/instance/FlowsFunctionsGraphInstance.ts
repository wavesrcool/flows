import { DataSource } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TypesFlowsFunctionsGraphInstanceContext } from "./TypesFlowsFunctionsGraphInstanceContext";

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
        resolvers: [`${__dirname}/graph/**/*-resolver.{js,ts}`],
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
