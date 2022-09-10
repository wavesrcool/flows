export const FlowsFunctionsEnvironmentLocalMailDomain = (): string => {
  const env = process.env.FLOWS_LOCAL_MAIL_DOMAIN;

  if (!env) {
    throw new Error(
      `[flows]: Error. FlowsFunctionsEnvironmentLocalMailDomain. process.env.FLOWS_LOCAL_MAIL_DOMAIN`
    );
  }

  return env;
};
