import {
  FlowsFunctionsAppApiRouter,
  FlowsFunctionsGraphInstance,
  FlowsFunctionsAppApiInstance,
} from "@wavesrcool/flows-functions";
import { TypesFiguresFlowsIoApi } from "./TypesFiguresFlowsIoApi";

export const FlowsIoApi = async ({
  connection,
}: TypesFiguresFlowsIoApi): Promise<typeof apollo> => {
  await connection
    .initialize()
    .then(() => console.log(`[flows-api]: Database connection established.`));

  const app = FlowsFunctionsAppApiInstance();
  FlowsFunctionsAppApiRouter({ app });

  const apollo = await FlowsFunctionsGraphInstance({ connection });

  if (!apollo) {
    throw new Error(`[flows-api]: Error. No graph instance.`);
  }

  await apollo.start().then(() => {
    console.log("[flows-api] Apollo server started.");
  });

  apollo.applyMiddleware({
    app,
    cors: false,
    path: `/graph`,
  });

  const port = process.env.PORT || 4000;

  app.listen(port, (): void => {
    console.log(`[flows-api] (env) ${process.env.NODE_ENV || "no env"}`);
    console.log(`[flows-api] (port) ${port}`);
  });

  return apollo;
};
