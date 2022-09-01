/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

export const FlowsFunctionsIoControllersKeysAccessVerify = async (
  _req: Request,
  res: Response
) => {
  try {
    const { xFlowAccount, xFlowTokenEncoded, xFlowTokenRecords } = res.locals;

    if (xFlowAccount && xFlowTokenEncoded && xFlowTokenRecords) {
      const {
        account: { value, key },
      } = xFlowTokenRecords;

      if (xFlowAccount === value) {
        res.status(200).send({
          message: `[flow-io] Received. (${
            res.locals.ipAddress || "no-ip-address"
          })`,
          "keys-access-verify": true,
          encoded: xFlowTokenEncoded,
          value,
          key,
        });
        return;
      }

      res.status(400).send({ error: "keys-access-verify-account" });
    } else {
      res.status(400).send({ error: "keys-access-verify" });
    }
  } catch (e) {
    console.log(
      `[flow-keys] Error. FlowsFunctionsIoControllersKeysAccessVerify. ${String(
        e
      )}`
    );
    res.status(500).send({ error: "flow-io" });
  }
};
