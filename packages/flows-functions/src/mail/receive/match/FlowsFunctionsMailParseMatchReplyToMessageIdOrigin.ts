// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseMatchReplyToMessageIdOrigin

const FlowsFunctionsMailParseMatchReplyToMessageIdOrigin = (
  value: string
): string | undefined => {
  const match0 = value.match(/&In-Reply-To=<([\s\S]*)>&Message-Id=/);

  if (!match0 || !match0.length || !match0[1]) {
    return undefined;
  }

  const match = match0[1];

  return match;
};

export default FlowsFunctionsMailParseMatchReplyToMessageIdOrigin;
