/* eslint-disable @typescript-eslint/no-explicit-any */

const FlowsFunctionsMailParseDecodeBody = (a: any): string | undefined => {
  if (!a) {
    return undefined;
  }

  const body0 = String(a);

  if (!body0) {
    return undefined;
  }

  const body = decodeURIComponent(
    Buffer.from(body0, "base64").toString("ascii").replace(/\+/g, ` `)
  );

  return body;
};

export default FlowsFunctionsMailParseDecodeBody;
