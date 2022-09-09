/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { FlowsFunctionsJwtVerify } from "../../../../../jwt/verify/FlowsFunctionsJwtVerify";

export const FlowsFunctionsIoControllersKeysAccessVerify = async (
  _req: Request,
  res: Response
) => {
  try {
    const { xFlowsKey: xFlowsKey0 } = res.locals;

    const xFlowsKey = String(xFlowsKey0);

    if (xFlowsKey) {
      const { complete: jwtVerifyComplete, message: jwtVerifyMessage } =
        await FlowsFunctionsJwtVerify({
          encoded: xFlowsKey,
        });

      if (jwtVerifyComplete && !jwtVerifyMessage) {
        res.status(200).send({
          message: `[flows]: Received. (${
            res.locals.ipAddress || "no-ip-address"
          })`,
          "keys-access-verify": true,
        });
        return;
      }
    }

    res.status(400).send({ error: "keys-access-verify" });
    return;
  } catch (e) {
    console.log(
      `[flows]: Error. FlowsFunctionsIoControllersKeysAccessVerify. ${String(
        e
      )}`
    );
    res.status(500).send({ error: "[flows]" });
  }
};
