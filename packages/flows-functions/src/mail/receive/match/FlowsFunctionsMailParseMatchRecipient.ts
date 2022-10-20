// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

const FlowsFunctionsMailParseMatchRecipient = (
  value: string
): string | undefined => {
  const match0 = value.match(/recipient=.*&sender=/g);

  if (!match0 || !match0.length) {
    return undefined;
  }

  const match = match0[0].slice(`recipient=`.length, -`&sender=`.length);

  return match;
};

export default FlowsFunctionsMailParseMatchRecipient;
