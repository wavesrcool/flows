import {
  FlowsModelsAccountCreateInput,
  FlowsModelsAccountRecordsInput,
  FlowsModelsEmailAddressCreateInput,
  FlowsModelsEmailAddressRecordsInput,
  FlowsModelsEmailLocalCreateInput,
  FlowsModelsEmailLocalRecordsInput,
} from "@wavesrcool/flows-models";
import { FlowsFunctionsModelsRelationsAccountLocalCreate } from "../../../..";
import { FlowsFunctionsMailSend } from "../../../../mail/send/FlowsFunctionsMailSend";
import { TypesFiguresFlowsFunctionsMailSend } from "../../../../mail/send/TypesFiguresFlowsFunctionsMailSend";
import {
  FlowsFunctionsModelsAccountCreate,
  TypesFiguresFlowsFunctionsModelsAccountCreate,
} from "../../../../models/account/create/FlowsFunctionsModelsAccountCreate";
import {
  FlowsFunctionsModelsEmailAddressCreate,
  TypesFiguresFlowsFunctionsModelsEmailAddressCreate,
} from "../../../../models/email-address/create/FlowsFunctionsModelsEmailAddressCreate";

import {
  TypesFiguresFlowsFunctionsModelsEmailLocalCreate,
  FlowsFunctionsModelsEmailLocalCreate,
} from "../../../../models/email-local/create/FlowsFunctionsModelsEmailLocalCreate";
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
    const {
      firstName: nameFirst,
      lastName: nameLast,
      emailAddress,
      emailLocal,
      account,
      password,
    } = flow;

    const ipAddress = String(locals.ipAddress ?? "");

    if (!ipAddress) {
      return { pass: false, message: "ip emailAddress", timestamp: Date.now() };
    }

    //
    // 1. create email
    const recordsEmailAddress: FlowsModelsEmailAddressRecordsInput = {
      nameFirst,
      nameLast,
    };
    const inputEmailAddress: FlowsModelsEmailAddressCreateInput = {
      address: emailAddress,
      ipAddress,
      records: recordsEmailAddress,
    };
    const figureEmailAddress: TypesFiguresFlowsFunctionsModelsEmailAddressCreate =
      {
        connection,
        input: inputEmailAddress,
      };
    const modelsCreateEmailAddress =
      await FlowsFunctionsModelsEmailAddressCreate(figureEmailAddress);

    if (!modelsCreateEmailAddress) {
      return {
        pass: false,
        message: "email emailAddress registered",
        timestamp: Date.now(),
      };
    }

    console.log(
      JSON.stringify(modelsCreateEmailAddress, null, 4),
      `modelsCreateEmailAddress`
    );

    //
    // 2. create local
    const recordsEmailLocal: FlowsModelsEmailLocalRecordsInput = {
      replyToLocal: `${emailLocal}`,
      contactName: `${nameFirst}`,
    };
    const inputEmailLocal: FlowsModelsEmailLocalCreateInput = {
      value: emailLocal,
      records: recordsEmailLocal,
    };
    const figureEmailLocal: TypesFiguresFlowsFunctionsModelsEmailLocalCreate = {
      connection,
      input: inputEmailLocal,
    };
    const modelsCreateEmailLocal = await FlowsFunctionsModelsEmailLocalCreate(
      figureEmailLocal
    );

    if (!modelsCreateEmailLocal) {
      return {
        pass: false,
        message: "email emailLocal registered",
        timestamp: Date.now(),
      };
    }

    console.log(
      JSON.stringify(modelsCreateEmailLocal, null, 4),
      `modelsCreateEmailLocal`
    );

    //
    // 3. create account
    const recordsAccount: FlowsModelsAccountRecordsInput = {
      nameFirst,
      nameLast,
    };
    const inputAccount: FlowsModelsAccountCreateInput = {
      value: account,
      password,
      ipAddress,
      records: recordsAccount,
    };
    const figureAccount: TypesFiguresFlowsFunctionsModelsAccountCreate = {
      connection,
      input: inputAccount,
    };
    const modelsCreateAccount = await FlowsFunctionsModelsAccountCreate(
      figureAccount
    );

    if (!modelsCreateAccount) {
      return {
        pass: false,
        message: "account registered",
        timestamp: Date.now(),
      };
    }

    console.log(
      JSON.stringify(modelsCreateAccount, null, 4),
      `modelsCreateAccount`
    );

    //
    // 4. relation account-local
    const pkAccount = modelsCreateAccount;
    const pkLocal = modelsCreateEmailLocal;
    await FlowsFunctionsModelsRelationsAccountLocalCreate({
      connection,
      pkAccount,
      pkLocal,
    });

    //
    // [complete]
    // send confirmation email

    const toName = `${nameFirst} ${nameLast}`;

    const text = `Hello ${toName},
    
The request to create an account for the email emailAddress "${emailAddress}" was successful.
  
  -- sent automatically at ${new Date().toISOString()}`;

    const figureMailSend: TypesFiguresFlowsFunctionsMailSend = {
      connection,
      mail,
      local: emailLocal,
      toName,
      toEmail: emailAddress,
      subject: `Your request to add email "${emailAddress}" was successful.`,
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
