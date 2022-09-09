export const FlowsFunctionsEnvironmentGlobalXFlowsAccess = (): string => {
  const env = process.env.FLOWS_GLOBAL_X_FLOWS_ACCESS;

  if (!env) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsEnvironmentGlobalXFlowsAccess. process.env.FLOWS_GLOBAL_X_FLOWS_ACCESS`
    );
  }

  return env;
};
