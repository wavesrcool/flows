import { FlowsFunctionsHashText } from "./FlowsFunctionsHashText";

describe("FlowsFunctionsHashText test", () => {
  it("run", () => {
    const result = FlowsFunctionsHashText({ text: "hello", secret: "world" });
    expect(result).toBeTruthy();
  });
});
