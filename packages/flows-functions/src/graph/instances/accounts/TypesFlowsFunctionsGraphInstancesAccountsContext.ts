import { Request, Response } from "express";
import { DataSource } from "typeorm";

export type TypesFlowsFunctionsGraphInstancesAccountsContext = {
  req: Request;
  res: Response;
  connection: DataSource;
};
