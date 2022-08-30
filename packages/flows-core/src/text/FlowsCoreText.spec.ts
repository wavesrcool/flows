import { FlowsCoreText } from "./FlowsCoreText";

describe("FlowsCoreText test", () => {
  it("run", () => {
    const fcText = new FlowsCoreText("hash-secret");
    expect(fcText).toBeTruthy();
  });
});
