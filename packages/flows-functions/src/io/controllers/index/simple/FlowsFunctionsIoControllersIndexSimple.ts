import { Request, Response } from "express";

export const FlowsFunctionsIoControllersIndexSimple = async (
  _req: Request,
  res: Response
) => {
  try {
    res.status(200).send({
      message: `[flows-io] Received. (${
        res.locals.ipAddress || "no-ip-address"
      })`,
    });
    return;
  } catch (e) {
    console.log(`[flows-io] Error. ${String(e)}`);
    res.status(500).send({ error: "flows-io" });
    return;
  }
};
