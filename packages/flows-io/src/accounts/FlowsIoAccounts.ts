import {
  FlowsFunctionsDatabaseSeed,
  FlowsFunctionsGraphInstancesAccounts,
  FlowsFunctionsIoInstancesAccounts,
  FlowsFunctionsMailInstance,
  TypesFiguresFlowsFunctionsDatabaseSeed,
} from "@wavesrcool/flows-functions";
import { routes } from "./routes/routes";
import { TypesFiguresFlowsIoAccounts } from "./TypesFiguresFlowsIoAccounts";

export const FlowsIoAccounts = async ({
  connection,
}: TypesFiguresFlowsIoAccounts): Promise<typeof apollo> => {
  await connection
    .initialize()
    .then(() => console.log(`[flows]: Database connection established.`));

  const input = {
    value: process.env.FLOWS_GLOBAL_SEED_ACCOUNT_VALUE || "",
    ipAddress: "127.0.0.1",
    password: process.env.FLOWS_GLOBAL_SEED_ACCOUNT_PASSWORD || "",
    records: {
      nameFirst: process.env.FLOWS_GLOBAL_SEED_ACCOUNT_NAME_FIRST || "",
      nameLast: process.env.FLOWS_GLOBAL_SEED_ACCOUNT_NAME_LAST || "",
    },
  };
  const figureDatabaseSeed: TypesFiguresFlowsFunctionsDatabaseSeed = {
    connection,
    input,
  };
  const seed = await FlowsFunctionsDatabaseSeed(figureDatabaseSeed);
  if (seed) {
    console.log(`[flows]: Database seeded.`);
  } else {
    console.log(`[flows]: Database exists.`);
  }

  const mail = FlowsFunctionsMailInstance();

  const { app, router } = FlowsFunctionsIoInstancesAccounts();
  routes({ app, router, connection });

  const apollo = await FlowsFunctionsGraphInstancesAccounts({
    connection,
    mail,
  });

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
