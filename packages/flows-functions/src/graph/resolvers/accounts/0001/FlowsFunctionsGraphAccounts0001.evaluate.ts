import {
  FlowsModelsEmailAddressCreateInput,
  FlowsModelsEmailAddressRecordsInput,
} from "@wavesrcool/flows-models";
import { FlowsFunctionsMailSend } from "../../../../mail/send/FlowsFunctionsMailSend";
import { TypesFiguresFlowsFunctionsMailSend } from "../../../../mail/send/TypesFiguresFlowsFunctionsMailSend";
import {
  FlowsFunctionsModelsEmailAddressCreate,
  TypesFiguresFlowsFunctionsModelsEmailAddressCreate,
} from "../../../../models/email-address/create/FlowsFunctionsModelsEmailAddressCreate";
import { TypesFlowsFunctionsGraphInstancesAccountsContext } from "../../../instances/accounts/TypesFlowsFunctionsGraphInstancesAccountsContext";
import { FlowsFunctionsGraphAccounts0001Input } from "./FlowsFunctionsGraphAccounts0001Input.class";
import { FlowsFunctionsGraphAccounts0001Response } from "./FlowsFunctionsGraphAccounts0001Response.class";
import { TypesFlowsGraphComplete0001 } from "./TypesFlowsGraphAccountsComplete0001";

export const FlowsFunctionsGraphAccounts0001e = async (
  {
    connection,
    mail,
    res: { locals },
  }: TypesFlowsFunctionsGraphInstancesAccountsContext,
  flow: FlowsFunctionsGraphAccounts0001Input
): Promise<FlowsFunctionsGraphAccounts0001Response> => {
  try {
    const { firstName: nameFirst, lastName: nameLast, email: address } = flow;

    const ipAddress = String(locals.ipAddress ?? "");

    if (!ipAddress) {
      return { pass: false, message: "ip address", timestamp: Date.now() };
    }

    const records: FlowsModelsEmailAddressRecordsInput = {
      nameFirst,
      nameLast,
    };

    const input: FlowsModelsEmailAddressCreateInput = {
      address,
      ipAddress,
      records,
    };

    const figure: TypesFiguresFlowsFunctionsModelsEmailAddressCreate = {
      connection,
      input,
    };

    const modelsCreateEmail = await FlowsFunctionsModelsEmailAddressCreate(
      figure
    );

    if (!modelsCreateEmail) {
      return {
        pass: false,
        message: "email address registered",
        timestamp: Date.now(),
      };
    }

    console.log(
      JSON.stringify(modelsCreateEmail, null, 4),
      `modelsCreateEmail`
    );

    const toName = `${nameFirst} ${nameLast}`;

    const text = `Hello ${toName},
    
The request to create an account for the email address "${address}" was successful.
  
  -- sent automatically at ${new Date().toISOString()}`;

    const figureMailSend: TypesFiguresFlowsFunctionsMailSend = {
      connection,
      mail,
      local: "help",
      toName,
      toEmail: address,
      subject: `Your request to add email "${address}" was successful.`,
      text,
      html: `<p>${text}</p>`,
    };

    const mailSend = await FlowsFunctionsMailSend(figureMailSend);

    if (!mailSend.pass || mailSend.message) {
      return {
        pass: false,
        message: mailSend.message || "mail send error",
        timestamp: Date.now(),
      };
    }

    const complete: TypesFlowsGraphComplete0001 = {
      pass: true,
      message: "complete",
      timestamp: Date.now(),
    };

    return complete;
  } catch (e0000e) {
    console.log(e0000e, `e0000e`);
    return {
      pass: false,
      message: "^flowmail-e",
      timestamp: Date.now(),
    };
  }
};
