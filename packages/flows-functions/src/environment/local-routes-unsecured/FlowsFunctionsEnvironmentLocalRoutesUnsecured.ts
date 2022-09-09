export const FlowsFunctionsEnvironmentLocalRoutesUnsecured = (): string => {
  const env = process.env.FLOWS_LOCAL_ROUTES_UNSECURED;

  if (!env) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsEnvironmentLocalRoutesUnsecured. process.env.FLOWS_LOCAL_ROUTES_UNSECURED`
    );
  }

  return env;
};
