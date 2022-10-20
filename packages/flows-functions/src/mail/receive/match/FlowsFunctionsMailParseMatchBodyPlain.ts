// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

const FlowsFunctionsMailParseMatchBodyPlain = (
  value: string
): string | undefined => {
  const match0 = value.match(/&body-plain=([\s\S]*)&stripped-text=/g);

  if (!match0 || !match0.length) {
    return undefined;
  }

  const match = match0[0].slice(
    `&body-plain=`.length,
    -`&stripped-text=`.length
  );

  return match;
};

export default FlowsFunctionsMailParseMatchBodyPlain;
