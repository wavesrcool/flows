// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

const FlowsFunctionsMailParseMatchMessageId = (
  value: string
): string | undefined => {
  const match0 = value.match(/&Message-Id=<([\s\S]*)>&Date=/g);

  if (!match0 || !match0.length) {
    return undefined;
  }

  const match = match0[0].slice(`&Message-Id=<`.length, -`>&Date=`.length);

  return match;
};

export default FlowsFunctionsMailParseMatchMessageId;
