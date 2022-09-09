export const FlowsFunctionsDatabaseUrl = (): string => {
  const url = process.env.FLOWS_GLOBAL_POSTGRES_URL;

  if (!url) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsDatabaseConnectionKeys. process.env.FLOWS_GLOBAL_POSTGRES_URL`
    );
  }

  return url;
};
