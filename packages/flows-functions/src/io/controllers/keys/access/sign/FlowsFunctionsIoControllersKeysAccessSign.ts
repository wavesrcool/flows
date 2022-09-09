import { FlowsTypesJwtRecords } from "@wavesrcool/flows-types";
import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { FlowsFunctionsJwtSign } from "../../../../../jwt/sign/FlowsFunctionsJwtSign";
import { FlowsFunctionsModelsAccountRead } from "../../../../../models/account/read/FlowsFunctionsModelsAccountRead";

export const FlowsFunctionsIoControllersKeysAccessSign = async (
  connection: DataSource
) => {
  return async (_req: Request, res: Response) => {
    try {
      const { xFlowsAccount, xFlowsRefresh } = res.locals;

      console.log(xFlowsAccount, xFlowsRefresh);

      // 1. lookup
      const lookupAccount = await FlowsFunctionsModelsAccountRead({
        connection,
        value: String(xFlowsAccount) || "",
      });

      console.log(JSON.stringify(lookupAccount, null, 4), `lookupAccount`);

      // 2. validate
      console.log(`@todo validate xFlowsRefresh`);

      const value = `${xFlowsAccount}`.trim();
      const key = `${`account-unique`}`.trim();

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
        res.status(200).send({
          message: `[flows]: Received. (${
            res.locals.ipAddress || "no-ip-address"
          })`,
          "keys-access-sign": true,
          encoded: jwtSignEncoded,
        });
        return;
      }

      if (jwtSignMessage) {
        res.status(400).send({ error: `keys-access-sign-${jwtSignMessage}` });
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
