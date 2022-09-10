export const FlowsFunctionsEnvironmentGlobalMailgunKey = (): string => {
  const env = process.env.FLOWS_GLOBAL_MAILGUN_KEY;

  if (!env) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsEnvironmentGlobalMailgunKey. process.env.FLOWS_GLOBAL_MAILGUN_KEY`
    );
  }

  return env;
};
