import Client from "mailgun.js/client";
import { DataSource } from "typeorm";

export type TypesFiguresFlowsFunctionsMailSend = {
  connection: DataSource;
  mail: Client;
  local: string;
  toName: string;
  toEmail: string;
  subject: string;
  text: string;
  html: string;
  otags?: string[];
};
