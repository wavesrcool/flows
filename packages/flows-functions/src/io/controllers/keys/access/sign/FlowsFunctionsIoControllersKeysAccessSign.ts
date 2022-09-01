import { FlowsTypesJwtRecords } from "@wavesrcool/flows-types";
import { Request, Response } from "express";
import { FlowsFunctionsJwtSign } from "../../../../../jwt/sign/FlowsFunctionsJwtSign";

export const FlowsFunctionsIoControllersKeysAccessSign = async (
  _req: Request,
  res: Response
) => {
  try {
    const { xFlowAccount } = res.locals;

    if (!xFlowAccount || !(typeof xFlowAccount === "string")) {
      res.status(400).send({ error: "keys-sign-xFlowAccount" });
      return;
    }

    const records: FlowsTypesJwtRecords = {
      account: {
        value: xFlowAccount,
        key: "ya",
      },
    };

    const secretEncryption = process.env.FLOWS_KEYS_SECRET_ENCRYPTION;

    if (!secretEncryption || !(typeof secretEncryption === "string")) {
      res.status(400).send({ error: "keys-sign-secretEncryption" });
      return;
    }

    const secretJwt = process.env.FLOWS_KEYS_SECRET_JWT;

    if (!secretJwt || !(typeof secretJwt === "string")) {
      res.status(400).send({ error: "keys-sign-secretJwt" });
      return;
    }

    const secretHash = process.env.FLOWS_KEYS_SECRET_HASH;

    if (!secretHash || !(typeof secretHash === "string")) {
      res.status(400).send({ error: "keys-sign-secretHash" });
      return;
    }

    const {
      complete: jwtSignComplete,
      message: jwtSignMessage,
      encoded: jwtSignEncoded,
    } = await FlowsFunctionsJwtSign({
      records,
      secretEncryption,
      secretJwt,
      secretHash,
    });

    if (jwtSignComplete && jwtSignEncoded && !jwtSignMessage) {
      res.status(200).send({
        message: `[flow-keys] Received. (${
          res.locals.ipAddress || "no-ip-address"
        })`,
        "keys-access-sign": true,
        encoded: jwtSignEncoded,
      });
    } else if (jwtSignMessage) {
      res.status(400).send({ error: jwtSignMessage });
    } else {
      res.status(400).send({ error: "keys-sign" });
    }
  } catch (e) {
    console.log(
      `[flow-keys] Error. FlowsFunctionsIoControllersKeysAccessSign. ${String(
        e
      )}`
    );
    res.status(500).send({ error: "flow-keys" });
  }
};
