import cryptojs from "crypto-js";

export type TypesFiguresFlowsFunctionsEncryptionTextEncode = {
  text: string;
  secret: string;
};

export const FlowsFunctionsEncryptionTextEncode = ({
  text,
  secret,
}: TypesFiguresFlowsFunctionsEncryptionTextEncode): string => {
  const encode = cryptojs.AES.encrypt(text, secret).toString();
  return encode;
};
