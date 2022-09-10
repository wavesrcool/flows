export const FlowsFunctionsEnvironmentLocalInstanceJurisdiction =
  (): string => {
    const env = process.env.FLOWS_LOCAL_INSTANCE_JURISDICTION;

    if (!env) {
      throw new Error(
        `[flows]: Error. FlowsFunctionsEnvironmentGlobalMailgunKey. process.env.FLOWS_LOCAL_INSTANCE_JURISDICTION`
      );
    }

    return env;
  };
