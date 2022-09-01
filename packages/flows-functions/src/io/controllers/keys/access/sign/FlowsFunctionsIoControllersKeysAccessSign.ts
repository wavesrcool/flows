import { FlowsTypesJwtRecords } from "@wavesrcool/flows-types";
import { Request, Response } from "express";
import { FlowsFunctionsJwtSign } from "../../../../../jwt/sign/FlowsFunctionsJwtSign";

export const FlowsFunctionsIoControllersKeysAccessSign = async (
  _req: Request,
  res: Response
) => {
  try {
    const { xsFlowAccount } = res.locals;

    if (!xsFlowAccount || !(typeof xsFlowAccount === "string")) {
      res.status(400).send({ error: "keys-sign-xsFlowAccount" });
      return;
    }

    const records: FlowsTypesJwtRecords = {
      account: {
        value: xsFlowAccount,
        key: "@todo-add-database-lookup-on-xsFlowAccount",
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
        message: `[flow-io] Received. (${
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
      `[flow-io] Error. FlowsFunctionsIoControllersKeysAccessSign. ${String(e)}`
    );
    res.status(500).send({ error: "flow-io" });
  }
};
