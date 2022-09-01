/* eslint-disable no-promise-executor-return */
import {
  FlowsTypesJwtPayload,
  FlowsTypesJwtRecords,
} from "@wavesrcool/flows-types";
import { sign, SignOptions } from "jsonwebtoken";
import { FlowsFunctionsEncryptionTextEncode } from "../../encryption/text/encode/FlowsFunctionsEncryptionTextEncode";
import { FlowsFunctionsHashText } from "../../hash/text/FlowsFunctionsHashText";
// import { FlowsFunctionsHashText } from "../../hash/text/FlowsFunctionsHashText";

const signOptions: SignOptions = {
  algorithm: "HS512",
  expiresIn: "16h",
};

export type TypesResolveFlowsFunctionsJwtSign = {
  complete: boolean;
  message: string | undefined;
  encoded: string | undefined;
};

export type TypesFiguresFlowsFunctionsJwtSign = {
  records: FlowsTypesJwtRecords;
};

export const FlowsFunctionsJwtSign = async ({
  records,
}: TypesFiguresFlowsFunctionsJwtSign): Promise<TypesResolveFlowsFunctionsJwtSign> => {
  try {
    const text = JSON.stringify(records);

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

    const cipher = FlowsFunctionsEncryptionTextEncode({
      text,
      secret: secretEncryption,
    });
    const hash = FlowsFunctionsHashText({ text, secret: secretHash });

    const data: FlowsTypesJwtPayload = {
      aud: "all",
      iss: "flow-keys",
      sub: "key",
      hash,
      cipher,
    };

    return new Promise<TypesResolveFlowsFunctionsJwtSign>((resolve) => {
      return sign(data, secretJwt, signOptions, (signError, encoded) => {
        if (signError === null) {
          if (encoded !== undefined) {
            resolve({
              complete: true,
              message: undefined,
              encoded,
            });
          }

          // end
        } else {
          resolve({
            complete: false,
            message: signError.message,
            encoded: undefined,
          });

          // end
        }

        return;
      });
    });
  } catch (e) {
    console.log(e, "FlowsFlowsFunctionsJwtSign");
    return {
      complete: false,
      message: `catch`,
      encoded: undefined,
    };
  }
};
