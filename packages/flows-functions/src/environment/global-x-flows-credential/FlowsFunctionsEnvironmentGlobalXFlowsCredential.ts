export const FlowsFunctionsEnvironmentGlobalXFlowsCredential = (): string => {
  const env = process.env.FLOWS_GLOBAL_X_FLOWS_CREDENTIAL;

  if (!env) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsEnvironmentGlobalXFlowsCredential. process.env.FLOWS_GLOBAL_X_FLOWS_CREDENTIAL`
    );
  }

  return env;
};
