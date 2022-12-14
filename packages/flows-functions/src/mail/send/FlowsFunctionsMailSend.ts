import { MailgunMessageData } from "mailgun.js/interfaces/Messages";
import { FlowsFunctionsEnvironmentLocalMailDomain } from "../../environment/local-mail-domain/FlowsFunctionsEnvironmentLocalMailDomain";
import { FlowsFunctionsModelsEmailLocalReadOne } from "../../models/email-local/read/one/FlowsFunctionsModelsEmailLocalReadOne";
import { TypesFiguresFlowsFunctionsMailSend } from "./TypesFiguresFlowsFunctionsMailSend";

export const FlowsFunctionsMailSend = async (
  figure: TypesFiguresFlowsFunctionsMailSend
): Promise<{
  pass: boolean;
  message?: string;
}> => {
  try {
    let message: string;
    const domain = FlowsFunctionsEnvironmentLocalMailDomain();

    const { connection, local } = figure;

    // lookup email local
    const modelsReadEmailLocal = await FlowsFunctionsModelsEmailLocalReadOne({
      connection,
      value: local,
    });

    if (!modelsReadEmailLocal) {
      message = `there is no model for this email-local`;
      return {
        pass: false,
        message,
      };
    }

    const { records: modelsReadEmailLocalRecords } = modelsReadEmailLocal;

    if (!modelsReadEmailLocalRecords) {
      message = `records are absent on this email-local`;
      return {
        pass: false,
        message,
      };
    }

    const { contactName } = modelsReadEmailLocalRecords;
    const from = `${contactName} <${local}@${domain}>`;

    const { toName, toEmail } = figure;
    const to = `${toName} <${toEmail}>`;

    const otag0 = `flows-send-${local}`;
    const { otags } = figure;
    const otag = otags ? [...otags, ...[otag0]] : [otag0];

    const { text, html, subject } = figure;
    const data: MailgunMessageData = {
      from,
      to,
      template: "",
      text,
      html,
      subject,
      "v:flows-version": `testing`,
      "o:tag": otag,
    };

    console.log(JSON.stringify(data, null, 4), `FlowsFunctionsMailSend data`);

    const sendResult = await figure.mail.messages.create(domain, data);

    if (sendResult.status !== 200) {
      return {
        pass: false,
        message: sendResult.message || "no mailgun error message",
      };
    }

    return {
      pass: true,
    };
  } catch (e) {
    console.log(e, "FlowsFunctionsMailSend");

    return {
      pass: false,
    };
  }
};
