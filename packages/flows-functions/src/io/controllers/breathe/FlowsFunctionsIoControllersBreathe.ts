import { Request, Response } from "express";

export const FlowsFunctionsIoControllersBreathe = async (
  _req: Request,
  res: Response
) => {
  try {
    res.status(200).send();
    return;
  } catch (e) {
    console.log(`[flows-io] Error. Breathe. ${String(e)}`);
    res.status(500).send();
    return;
  }
};
