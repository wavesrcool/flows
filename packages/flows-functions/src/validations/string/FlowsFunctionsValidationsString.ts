export const FlowsFunctionsValidationsString = (
  s: string
): string | undefined => {
  if (!s || !(typeof s === "string")) {
    return undefined;
  }

  const string = String(s).trim();
  return string;
};
