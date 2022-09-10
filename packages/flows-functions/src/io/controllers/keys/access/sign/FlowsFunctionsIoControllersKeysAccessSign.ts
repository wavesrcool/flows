import { FlowsTypesJwtRecords } from "@wavesrcool/flows-types";
import { Request, Response } from "express";
import { DataSource } from "typeorm";
import argon2 from "argon2";
import { FlowsFunctionsJwtSign } from "../../../../../jwt/sign/FlowsFunctionsJwtSign";
import { FlowsFunctionsModelsAccountRead } from "../../../../../models/account/read/FlowsFunctionsModelsAccountRead";

export type TypesFiguresFlowsFunctionsIoControllersKeysAccessSignSuccess = {
  pass: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
};

export const FlowsFunctionsIoControllersKeysAccessSign = async (
  connection: DataSource
) => {
  return async (_req: Request, res: Response) => {
    try {
      let errorMessage: string;

      const { keysSignAccount, keysSignPassword } = res.locals;

      const account = String(keysSignAccount || "");
      const password = String(keysSignPassword || "");

      // 1. lookup account
      const readAccount = await FlowsFunctionsModelsAccountRead({
        connection,
        value: account,
      });

      if (!readAccount) {
        errorMessage = `account given is not registered`;
        res.status(400).send({ error: `${errorMessage}` });
        return;
      }

      const passwordCorrect = await argon2.verify(
        readAccount.password,
        password
      );

      if (!passwordCorrect) {
        errorMessage = `account password is not correct`;
        res.status(400).send({ error: `${errorMessage}` });
        return;
      }

      // 2. validate account refresh token

      const { value, key, refreshToken } = readAccount;

      const records: FlowsTypesJwtRecords = {
        account: {
          value,
          key,
        },
      };

      const {
        complete: jwtSignComplete,
        message: jwtSignMessage,
        encoded: jwtSignEncoded,
      } = await FlowsFunctionsJwtSign({
        records,
      });

      if (jwtSignComplete && jwtSignEncoded && !jwtSignMessage) {
        const message = `[flows]: Received. (${
          res.locals.ipAddress || "no-ip-address"
        })`;

        const success: TypesFiguresFlowsFunctionsIoControllersKeysAccessSignSuccess =
          {
            pass: true,
            message,
            accessToken: jwtSignEncoded,
            refreshToken,
          };
        res.status(200).send({
          ...success,
        });
        return;
      }

      if (jwtSignMessage) {
        errorMessage = jwtSignMessage;
        res.status(400).send({ error: `${errorMessage}` });
        return;
      }

      res.status(400).send({ error: "keys-access-sign" });
    } catch (e) {
      console.log(
        `[flows]: Error. FlowsFunctionsIoControllersKeysAccessSign. ${String(
          e
        )}`
      );
      res.status(500).send({ error: "[flows]" });
    }
  };
};
