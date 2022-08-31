import crypto from "crypto";

export type TypesFiguresFlowsFunctionsMailgunVerifySignKey = {
  timestamp: string;
  token: string;
  signature: string;
  signKey: string;
};

export const FlowsFunctionsMailgunVerifySignKey = ({
  timestamp,
  token,
  signature,
  signKey,
}: TypesFiguresFlowsFunctionsMailgunVerifySignKey): boolean => {
  const encodedToken = crypto
    .createHmac("sha256", signKey)
    .update(timestamp.concat(token))
    .digest("hex");

  const verify = !!(encodedToken === signature);
  return verify;
};
