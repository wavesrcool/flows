import { FlowsFunctionsJwtVerify } from "./FlowsFunctionsJwtVerify";

describe("FlowsFunctionsJwtVerify test", async () => {
  it("run", async () => {
    const encodedAny = "not a jwt";
    const {
      complete: jwtVerifyCompleteAny,
      message: jwtVerifyMessageAny,
      decoded: jwtVerifyEncodedAny,
    } = await FlowsFunctionsJwtVerify({
      encoded: encodedAny,
      secretEncryption: "secret-encryption",
      secretJwt: "secret-jwt",
    });

    expect(jwtVerifyCompleteAny).toBe(false);
    expect(jwtVerifyMessageAny).toBeInstanceOf("string");
    expect(jwtVerifyEncodedAny).toBeFalsy();

    const encodedJwt = "";
    const {
      complete: jwtVerifyCompleteJwt,
      message: jwtVerifyMessageJwt,
      decoded: jwtVerifyEncodedJwt,
    } = await FlowsFunctionsJwtVerify({
      encoded: encodedJwt,
      secretEncryption: "secret-encryption",
      secretJwt: "secret-jwt",
    });

    expect(jwtVerifyCompleteJwt).toBe(true);
    expect(jwtVerifyMessageJwt).toBeFalsy();
    expect(jwtVerifyEncodedJwt).toBeInstanceOf("string");
  });
});
