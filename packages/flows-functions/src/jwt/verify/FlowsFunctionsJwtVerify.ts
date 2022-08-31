/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-promise-executor-return */
import { verify, VerifyOptions } from "jsonwebtoken";
import { FlowsFunctionsEncryptionTextDecode } from "../../encryption/text/decode/FlowsFunctionsEncryptionTextDecode";
import { FlowsFunctionsHashText } from "../../hash/text/FlowsFunctionsHashText";

const verifyOptions: VerifyOptions = {
  algorithms: ["HS512"],
};

export type TypesResolveFlowsFunctionsJwtVerify = {
  complete: boolean;
  message: string | undefined;
  decoded: string | undefined;
};

export type TypesFiguresFlowsFunctionsJwtVerify = {
  encoded: string;
  secretEncryption: string;
  secretJwt: string;
};

export const FlowsFunctionsJwtVerify = async ({
  encoded,
  secretEncryption,
  secretJwt,
}: TypesFiguresFlowsFunctionsJwtVerify): Promise<TypesResolveFlowsFunctionsJwtVerify> => {
  try {
    return new Promise<TypesResolveFlowsFunctionsJwtVerify>((resolve) => {
      return verify(
        encoded,
        secretJwt,
        verifyOptions,
        (verifyError, decoded0) => {
          if (verifyError === null) {
            if (decoded0 !== undefined) {
              const { hash: hash0, cipher: cipher0 } = decoded0 as any;

              if (!hash0 || typeof hash0 !== "string") {
                resolve({
                  complete: false,
                  message: "jwt-hash",
                  decoded: undefined,
                });
                return;
              }

              if (!cipher0 || typeof cipher0 !== "string") {
                resolve({
                  complete: false,
                  message: "jwt-cipher",
                  decoded: undefined,
                });
                return;
              }

              const decoded = FlowsFunctionsEncryptionTextDecode({
                text: cipher0,
                secret: secretEncryption,
              });
              const hash = FlowsFunctionsHashText({
                text: decoded,
                secret: secretEncryption,
              });

              if (!(hash === hash0)) {
                resolve({
                  complete: false,
                  message: "jwt-equivalence",
                  decoded: undefined,
                });
                return;
              }

              resolve({
                complete: true,
                message: undefined,
                decoded,
              });
            }
          } else {
            resolve({
              complete: false,
              message: verifyError.message,
              decoded: undefined,
            });
          }

          return;
        }
      );
    });
  } catch (e) {
    console.log(e, "FlowsFunctionsJwtVerify");
    return {
      complete: false,
      message: "catch",
      decoded: undefined,
    };
  }
};
