import formData from "form-data";
import Mailgun from "mailgun.js";
import { FlowsFunctionsEnvironmentGlobalMailgunKey } from "../../environment/global-mailgun-key/FlowsFunctionsEnvironmentGlobalMailgunKey";
import { FlowsFunctionsEnvironmentLocalInstanceJurisdiction } from "../../environment/local-instance-jurisdiction/FlowsFunctionsEnvironmentLocalInstanceJurisdiction";

export const FlowsFunctionsMailInstance = (): typeof mail => {
  const isEu =
    FlowsFunctionsEnvironmentLocalInstanceJurisdiction().toLowerCase() === "eu";

  const key = FlowsFunctionsEnvironmentGlobalMailgunKey();
  const url = `https://api${isEu ? `.eu` : ""}.mailgun.net`;
  const mg = new Mailgun(formData);
  const mail = mg.client({
    username: "api",
    key,
    url,
  });
  return mail;
};
