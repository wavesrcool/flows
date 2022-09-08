import { Request, Response } from "express";
import { DataSource } from "typeorm";

export type TypesFlowsFunctionsGraphInstanceContext = {
  req: Request;
  res: Response;
  connection: DataSource;
};
