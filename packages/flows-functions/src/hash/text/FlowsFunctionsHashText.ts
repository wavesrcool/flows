import { createHmac } from "crypto";

export type TypesFiguresFlowsFunctionsHashText = {
  text: string;
  secret: string;
};

export const FlowsFunctionsHashText = ({
  text,
  secret,
}: TypesFiguresFlowsFunctionsHashText): string => {
  console.log(`publish`);
  const md5 = createHmac("md5", secret).update(text).digest("hex");
  return md5;
};
