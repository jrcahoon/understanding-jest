import * as actions from "../ManualMockExample";

describe("Verify override", () => {
  // this test is currently failing
  test("can call the overridden function", () => {
    expect(actions.foo()).toBe(8);
  });

  test("it is actually mocked", () => {
    expect(actions.bar()).toBe(4);
  });
});
