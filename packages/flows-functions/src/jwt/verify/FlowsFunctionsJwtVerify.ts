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
};

export type TypesFiguresFlowsFunctionsJwtVerify = {
  encoded: string;
};

export const FlowsFunctionsJwtVerify = async ({
  encoded,
}: TypesFiguresFlowsFunctionsJwtVerify): Promise<TypesResolveFlowsFunctionsJwtVerify> => {
  try {
    const secretEncryption = process.env.FLOWS_GLOBAL_SECRET_ENCRYPTION;

    if (!secretEncryption) {
      throw new Error(
        `[flows-functions] Error. FlowsFunctionsJwtSign: secretEncryption`
      );
    }

    const secretHash = process.env.FLOWS_GLOBAL_SECRET_HASH;

    if (!secretHash) {
      throw new Error(
        `[flows-functions] Error. FlowsFunctionsJwtSign: secretHash`
      );
    }

    const secretJwt = process.env.FLOWS_GLOBAL_SECRET_JWT;

    if (!secretJwt) {
      throw new Error(
        `[flows-functions] Error. FlowsFunctionsJwtSign: secretJwt`
      );
    }

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
                });
                return;
              }

              if (!cipher0 || typeof cipher0 !== "string") {
                resolve({
                  complete: false,
                  message: "jwt-cipher",
                });
                return;
              }

              const decoded = FlowsFunctionsEncryptionTextDecode({
                text: cipher0,
                secret: secretEncryption,
              });
              const hash = FlowsFunctionsHashText({
                text: decoded,
                secret: secretHash,
              });

              if (!(hash === hash0)) {
                resolve({
                  complete: false,
                  message: "jwt-equivalence",
                });
                return;
              }

              resolve({
                complete: true,
                message: undefined,
              });

              /* const records0 = JSON.parse(decoded);

              if (!records0 || !(typeof records0 === "object")) {
                resolve({
                  complete: false,
                  message: "jwt-records",
                  records: undefined,
                });
                return;
              }

              const { account: account0 } = records0;

              if (!account0 || !(typeof account0 === "object")) {
                resolve({
                  complete: false,
                  message: "jwt-account",
                  records: undefined,
                });
                return;
              }

              const { value: value0, key: key0 } = account0;

              if (!value0 || typeof value0 !== "string") {
                resolve({
                  complete: false,
                  message: "jwt-account-value",
                  records: undefined,
                });
                return;
              }

              if (!key0 || typeof key0 !== "string") {
                resolve({
                  complete: false,
                  message: "jwt-account-key",
                  records: undefined,
                });
                return;
              }

              const value = String(value0).trim();
              const key = String(key0).trim();
              */
            }
          } else {
            resolve({
              complete: false,
              message: verifyError.message,
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
    };
  }
};
