// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

const FlowsFunctionsMailParseMatchFrom = (
  value: string
): string | undefined => {
  const match0 = value.match(/&from=.*&X-Mailgun/g);

  if (!match0 || !match0.length) {
    return undefined;
  }

  const match = match0[0].slice(`&from=`.length, -`&X-Mailgun`.length);

  return match;
};

export default FlowsFunctionsMailParseMatchFrom;
