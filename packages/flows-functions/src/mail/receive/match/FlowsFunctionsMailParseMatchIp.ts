// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

const FlowsFunctionsMailParseMatchIp = (value: string): string | undefined => {
  const match0 = value.match(
    /\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\]/g
  );

  if (!match0 || !match0.length) {
    return undefined;
  }

  const match = Array.from(
    new Set(match0.map((i) => i.replace(/\[/g, ``).replace(/\]/g, ``)))
  )
    .filter((i) => !(i === `17.58.6.56`))
    .pop();

  return match;
};

export default FlowsFunctionsMailParseMatchIp;
