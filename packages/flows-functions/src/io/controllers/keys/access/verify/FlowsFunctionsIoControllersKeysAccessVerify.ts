/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { FlowsFunctionsJwtVerify } from "../../../../../jwt/verify/FlowsFunctionsJwtVerify";

export type TypesFiguresFlowsFunctionsIoControllersKeysAccessSign = {
  pass: boolean;
  message: string;
};

export const FlowsFunctionsIoControllersKeysAccessVerify = async (
  _req: Request,
  res: Response
) => {
  try {
    const { xFlowsAccess } = res.locals;

    if (xFlowsAccess && typeof xFlowsAccess === "string") {
      const { complete: jwtVerifyComplete, message: jwtVerifyMessage } =
        await FlowsFunctionsJwtVerify({
          encoded: xFlowsAccess,
        });

      if (jwtVerifyComplete && !jwtVerifyMessage) {
        const message = `[flows]: Received. (${
          res.locals.ipAddress || "no-ip-address"
        })`;

        const success: TypesFiguresFlowsFunctionsIoControllersKeysAccessSign = {
          pass: true,
          message,
        };
        res.status(200).send({
          ...success,
        });
        return;
      }
    }

    const message = `invalidated request`;
    const failure: TypesFiguresFlowsFunctionsIoControllersKeysAccessSign = {
      pass: false,
      message,
    };

    res.status(400).send({ ...failure });
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
