import { Request, Response } from "express";

export const FlowsFunctionsIoControllersIndexSimple = async (
  _req: Request,
  res: Response
) => {
  try {
    const ip = res.locals.ipAddress || "no-ip-address";
    const message = `[flows-io] Received. (${ip})`;
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`<p>${message}</p>`);
    return;
  } catch (e) {
    console.log(
      `[flows-io] Error. FlowsFunctionsIoControllersIndexSimple. ${String(e)}`
    );
    res.status(500).send({ error: "flows-io" });
    return;
  }
};
