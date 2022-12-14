import cryptojs from "crypto-js";

export type TypesFiguresFlowsFunctionsEncryptionTextDecode = {
  text: string;
  secret: string;
};

export const FlowsFunctionsEncryptionTextDecode = ({
  text,
  secret,
}: TypesFiguresFlowsFunctionsEncryptionTextDecode): string => {
  // you 1 second ago? uncommited changes...
  const decode = cryptojs.AES.decrypt(text, secret).toString(cryptojs.enc.Utf8);
  return decode;
};
