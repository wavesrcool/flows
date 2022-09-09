import { Request, Response } from "express";

export const FlowsFunctionsIoControllersIndexSimple = async (
  _req: Request,
  res: Response
) => {
  try {
    const ip = res.locals.ipAddress || "no-ip-address";
    const message = `[flows]: Received. (${ip})`;
    res.set("Content-Type", "text/html");
    res.send(Buffer.from(`<p>${message}</p>`));
    return;
  } catch (e) {
    console.log(
      `[flows]: Error. FlowsFunctionsIoControllersIndexSimple. ${String(e)}`
    );
    res.status(500).send({ error: "flows-io" });
    return;
  }
};
