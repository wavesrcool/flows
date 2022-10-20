// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

// @rad-roots/radroots-library-functions:function FlowsFunctionsMailParseMatchTimeString

const FlowsFunctionsMailParseMatchTimeString = (
  value: string
): string | undefined => {
  const match0 = value.match(/>;([\s\S]*)\(UTC\)&/g);

  if (!match0 || !match0.length) {
    return undefined;
  }

  const match = match0[0].slice(`>;(`.length, -`(UTC)&`.length).trim();

  return match;
};

export default FlowsFunctionsMailParseMatchTimeString;
