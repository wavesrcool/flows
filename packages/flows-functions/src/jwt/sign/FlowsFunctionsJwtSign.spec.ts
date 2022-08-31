import { FlowsTypesJwtRecords } from "@wavesrcool/flows-types";
import { FlowsFunctionsJwtSign } from "./FlowsFunctionsJwtSign";

describe("FlowsFunctionsJwtSign test", async () => {
  it("run", async () => {
    const records: FlowsTypesJwtRecords = {
      account: {
        value: "test-account",
        key: "test-key",
      },
    };
    const {
      complete: jwtSignComplete,
      message: jwtSignMessage,
      encoded: jwtSignEncoded,
    } = await FlowsFunctionsJwtSign({
      records,
      secretEncryption: "secret-encryption",
      secretJwt: "secret-jwt",
    });

    expect(jwtSignComplete).toBe(true);
    expect(jwtSignMessage).toBeFalsy();
    expect(jwtSignEncoded).toBeInstanceOf("string");
  });
});
