export const FlowsFunctionsEnvironmentGlobalPostgresUrl = (): string => {
  const env = process.env.FLOWS_GLOBAL_POSTGRES_URL;

  if (!env) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsEnvironmentGlobalPostgresUrl. process.env.FLOWS_GLOBAL_POSTGRES_URL`
    );
  }

  return env;
};
