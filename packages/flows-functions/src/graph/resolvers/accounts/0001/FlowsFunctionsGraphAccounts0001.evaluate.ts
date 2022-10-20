import {
  FlowsModelsAccountCreateInput,
  FlowsModelsAccountRecordsInput,
  FlowsModelsEmailAddressCreateInput,
  FlowsModelsEmailAddressRecordsInput,
  FlowsModelsEmailLocalCreateInput,
  FlowsModelsEmailLocalRecordsInput,
} from "@wavesrcool/flows-models";
import { FlowsFunctionsMailSend } from "../../../../mail/send/FlowsFunctionsMailSend";
import { TypesFiguresFlowsFunctionsMailSend } from "../../../../mail/send/TypesFiguresFlowsFunctionsMailSend";
import {
  FlowsFunctionsModelsAccountCreate,
  TypesFiguresFlowsFunctionsModelsAccountCreate,
} from "../../../../models/account/create/FlowsFunctionsModelsAccountCreate";
import { FlowsFunctionsModelsAccountReadOne } from "../../../../models/account/read/one/FlowsFunctionsModelsAccountReadOne";
import {
  FlowsFunctionsModelsEmailAddressCreate,
  TypesFiguresFlowsFunctionsModelsEmailAddressCreate,
} from "../../../../models/email-address/create/FlowsFunctionsModelsEmailAddressCreate";
import { FlowsFunctionsModelsEmailAddressReadOne } from "../../../../models/email-address/read/one/FlowsFunctionsModelsEmailAddressReadOne";

import {
  TypesFiguresFlowsFunctionsModelsEmailLocalCreate,
  FlowsFunctionsModelsEmailLocalCreate,
} from "../../../../models/email-local/create/FlowsFunctionsModelsEmailLocalCreate";
import { FlowsFunctionsModelsEmailLocalReadOne } from "../../../../models/email-local/read/one/FlowsFunctionsModelsEmailLocalReadOne";
import { FlowsFunctionsModelsRelationsAccountLocalCreate } from "../../../../models/_relations/account-local/FlowsFunctionsModelsRelationsAccountLocalCreate";
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

    // 0-1. check email address doesn't exist
    const existsEmailAddress = await FlowsFunctionsModelsEmailAddressReadOne({
      connection,
      value: emailAddress,
    });

    if (existsEmailAddress) {
      return {
        pass: false,
        message: `email address "${existsEmailAddress.value}" is registered`,
        timestamp: Date.now(),
      };
    }

    // 0-2. check email local doesn't exist
    const existsEmailLocal = await FlowsFunctionsModelsEmailLocalReadOne({
      connection,
      value: emailLocal,
    });

    if (existsEmailLocal) {
      return {
        pass: false,
        message: `email local "${existsEmailLocal.value}" is registered`,
        timestamp: Date.now(),
      };
    }

    // 0-3. check account doesn't exist
    const existsAccount = await FlowsFunctionsModelsAccountReadOne({
      connection,
      value: account,
    });

    if (existsAccount) {
      return {
        pass: false,
        message: `account "${existsAccount.value}" is registered`,
        timestamp: Date.now(),
      };
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
        message: "!modelsCreateEmailAddress",
        timestamp: Date.now(),
      };
    }

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
        message: "!modelsCreateEmailLocal",
        timestamp: Date.now(),
      };
    }

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
        message: "!modelsCreateAccount",
        timestamp: Date.now(),
      };
    }

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

    const greeting = `Hello ${toName},`;
    const content1 = `The request to create an account for the email emailAddress "${emailAddress}" was successful.`;
    const closing = `-- Sent automatically by "flows-accounts" (${new Date().toISOString()})`;

    const textList = [greeting, content1, closing];

    const text = textList.join("\r\n");

    // add white-space: pre-wrap;
    const html = `<p>${textList.map((s) => `<p>${s}</p>`)}</p>`;
    const figureMailSend: TypesFiguresFlowsFunctionsMailSend = {
      connection,
      mail,
      local: emailLocal,
      toName,
      toEmail: emailAddress,
      subject: `Your request to add email "${emailAddress}" was successful.`,
      text,
      html,
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
