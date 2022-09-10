import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { FlowsFunctionsModelsAccountRead } from "../../../../models/account/read/FlowsFunctionsModelsAccountRead";

export type TypesFiguresFlowsFunctionsIoControllersAccountsCreateSuccess = {
  pass: boolean;
  message: string;
};

export const FlowsFunctionsIoControllersAccountsCreate = async (
  connection: DataSource
) => {
  return async (req: Request, res: Response) => {
    try {
      let errorMessage: string;

      const { accountsName } = req.body;

      const account = String(accountsName ?? "");

      const readAccount = await FlowsFunctionsModelsAccountRead({
        connection,
        value: account,
      });

      if (readAccount) {
        errorMessage = `account exists.`;
        res.status(400).send({ error: `${errorMessage}` });
        return;
      }

      console.log(`account: ${account} is available.`);

      const message = `[flows]: Received. (${
        res.locals.ipAddress || "no-ip-address"
      })`;

      const success: TypesFiguresFlowsFunctionsIoControllersAccountsCreateSuccess =
        {
          pass: true,
          message,
        };
      res.status(200).send({
        ...success,
      });
      return;
    } catch (e) {
      console.log(
        `[flows]: Error. FlowsFunctionsIoControllersAccountsCreate. ${String(
          e
        )}`
      );
      res.status(500).send({ error: "[flows]" });
    }
  };
};
