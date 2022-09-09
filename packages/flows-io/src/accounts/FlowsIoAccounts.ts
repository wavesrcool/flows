import {
  FlowsFunctionsGraphInstance,
  FlowsFunctionsIoInstanceKeys,
} from "@wavesrcool/flows-functions";
import { TypesFiguresFlowsIoAccounts } from "./TypesFiguresFlowsIoAccounts";

export const FlowsIoAccounts = async ({
  connection,
}: TypesFiguresFlowsIoAccounts): Promise<typeof apollo> => {
  await connection
    .initialize()
    .then(() => console.log(`[flows]: Database connection established.`));

  const { app } = FlowsFunctionsIoInstanceKeys();

  const apollo = await FlowsFunctionsGraphInstance({ connection });

  if (!apollo) {
    throw new Error(`[flows]: Error. No graph instance.`);
  }

  await apollo.start().then(() => {
    console.log("[flows]: Apollo server running.");
  });

  apollo.applyMiddleware({
    app,
    cors: false,
    path: `/graph`,
  });

  const port = process.env.PORT || process.env.FLOWS_LOCAL_PORT || 4444;

  app.listen(port, (): void => {
    console.log(`[flows]: (env) ${process.env.NODE_ENV || "no env"}`);
    console.log(`[flows]: (port) ${port}`);
  });

  return apollo;
};
