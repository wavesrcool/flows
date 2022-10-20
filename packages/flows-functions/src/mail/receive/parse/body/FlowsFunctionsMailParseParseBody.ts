// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

import FlowsFunctionsMailParseMatchBodyPlain from "../../match/FlowsFunctionsMailParseMatchBodyPlain";
import FlowsFunctionsMailParseMatchFrom from "../../match/FlowsFunctionsMailParseMatchFrom";
import FlowsFunctionsMailParseMatchIp from "../../match/FlowsFunctionsMailParseMatchIp";
import FlowsFunctionsMailParseMatchMessageId from "../../match/FlowsFunctionsMailParseMatchMessageId";
import FlowsFunctionsMailParseMatchRecipient from "../../match/FlowsFunctionsMailParseMatchRecipient";
import FlowsFunctionsMailParseMatchReplyToMessageId from "../../match/FlowsFunctionsMailParseMatchReplyToMessageId";
import FlowsFunctionsMailParseMatchReplyToMessageIdOrigin from "../../match/FlowsFunctionsMailParseMatchReplyToMessageIdOrigin";
import FlowsFunctionsMailParseMatchSender from "../../match/FlowsFunctionsMailParseMatchSender";
import FlowsFunctionsMailParseMatchStrippedHtml from "../../match/FlowsFunctionsMailParseMatchStrippedHtml";
import FlowsFunctionsMailParseMatchStrippedText from "../../match/FlowsFunctionsMailParseMatchStrippedText";
import FlowsFunctionsMailParseMatchSubject from "../../match/FlowsFunctionsMailParseMatchSubject";
import FlowsFunctionsMailParseMatchTimeEpoch from "../../match/FlowsFunctionsMailParseMatchTimeEpoch";
import FlowsFunctionsMailParseMatchTimeString from "../../match/FlowsFunctionsMailParseMatchTimeString";

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseParseBody

const FlowsFunctionsMailParseParseBody = async (raw: string): Promise<void> => {
  const el: string[] = [];

  const recipient = FlowsFunctionsMailParseMatchRecipient(raw);

  if (!recipient) {
    //
    el.push(`!recipient`);
  }

  const sender = FlowsFunctionsMailParseMatchSender(raw);

  if (!sender) {
    //
    el.push(`!sender`);
  }

  const subject = FlowsFunctionsMailParseMatchSubject(raw);

  if (!subject) {
    //
    el.push(`!subject`);
  }

  const from = FlowsFunctionsMailParseMatchFrom(raw);

  if (!from) {
    //
    el.push(`!from`);
  }

  const ip = FlowsFunctionsMailParseMatchIp(raw);

  if (!ip) {
    //
    el.push(`!ip`);
  }

  const bodyPlain = FlowsFunctionsMailParseMatchBodyPlain(raw);

  if (!bodyPlain) {
    //
    el.push(`!bodyPlain`);
  }

  const timeStr = FlowsFunctionsMailParseMatchTimeString(raw);

  if (!timeStr) {
    //
    el.push(`!timeStr`);
  }

  const timeEpoch = FlowsFunctionsMailParseMatchTimeEpoch(raw);

  if (!timeEpoch) {
    //
    el.push(`!timeEpoch`);
  }

  const strippedText = FlowsFunctionsMailParseMatchStrippedText(raw);

  if (!strippedText) {
    //
    el.push(`!strippedText`);
  }
  const strippedHtml = FlowsFunctionsMailParseMatchStrippedHtml(raw);

  if (!strippedHtml) {
    //
    el.push(`!strippedHtml`);
  }

  if (!(el.length === 0)) {
    console.log(`\nmatch-errors\n`);

    el.map((matchError) => {
      console.log(`[match-error]\t${matchError}`);
      return;
    });

    return;
  }

  // * * * * * * * * * * * * * * * * * * *
  //  radroots
  //
  //  presence of messageId indicates type
  //
  // * * * * * * * * * * * * * * * * * * *

  const messageId = FlowsFunctionsMailParseMatchMessageId(raw);

  switch (!!messageId) {
    case true: {
      // * * * * * * * * * * * * * * * * * * *
      //  radroots
      //
      //  new message
      //
      // * * * * * * * * * * * * * * * * * * *
      console.log(`\nnew message\n`);

      const emailId = messageId;

      console.log(emailId);

      break;
    }

    case false: {
      // * * * * * * * * * * * * * * * * * * *
      //  radroots
      //
      //  reply-to message
      //
      // * * * * * * * * * * * * * * * * * * *
      console.log(`\nreply-to\n`);

      const originId = FlowsFunctionsMailParseMatchReplyToMessageIdOrigin(raw);

      const emailId = FlowsFunctionsMailParseMatchReplyToMessageId(raw);

      console.log(originId);
      console.log(emailId);

      break;
    }

    default:
      break;
  }

  /* const resolveIp = await RadrootsLibraryFunctionsRequestIpAddress(ip || '')

  const maMyo: RadrootsLibraryTypesMinymaMyo = {
    sender,
    from,
    ip,
  } */
};

export default FlowsFunctionsMailParseParseBody;
