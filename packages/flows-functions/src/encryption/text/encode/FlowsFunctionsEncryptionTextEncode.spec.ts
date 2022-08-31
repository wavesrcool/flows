import { FlowsFunctionsEncryptionTextEncode } from "./FlowsFunctionsEncryptionTextEncode";

describe("FlowsFunctionsEncryptionTextEncode test", () => {
  it("run", () => {
    const result = FlowsFunctionsEncryptionTextEncode({
      text: "hello",
      secret: "world",
    });
    expect(result).toBeInstanceOf("string");
  });
});
