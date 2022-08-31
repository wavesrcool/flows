import { FlowsFunctionsEncryptionTextDecode } from "./FlowsFunctionsEncryptionTextDecode";

describe("FlowsFunctionsEncryptionTextDecode test", () => {
  it("run", () => {
    const result = FlowsFunctionsEncryptionTextDecode({
      text: "hello",
      secret: "world",
    });
    expect(result).toBeInstanceOf("string");
  });
});
