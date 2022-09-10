import { Request, Response } from "express";
import Client from "mailgun.js/client";
import { DataSource } from "typeorm";

export type TypesFlowsFunctionsGraphInstancesAccountsContext = {
  req: Request;
  res: Response;
  connection: DataSource;
  mail: Client;
};
