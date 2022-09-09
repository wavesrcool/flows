import { FlowsFunctionsIoInstanceKeys } from "@wavesrcool/flows-functions";
import { routes } from "./routes/routes";
import { TypesFiguresFlowsIoKeys } from "./TypesFiguresFlowsIoKeys";

export const FlowsIoKeys = async ({
  connection,
}: TypesFiguresFlowsIoKeys): Promise<typeof app> => {
  await connection
    .initialize()
    .then(() => console.log(`[flows]: Database connection established.`));

  const { app, router } = FlowsFunctionsIoInstanceKeys();

  routes({ app, router, connection });

  const port = process.env.PORT || process.env.FLOWS_LOCAL_PORT || 4444;

  app.listen(port, (): void => {
    console.log(`[flows]: (env) ${process.env.NODE_ENV || "no env"}`);
    console.log(`[flows]: (port) ${port}`);
  });

  return app;
};
