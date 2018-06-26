import * as actions from "../ManualMockExample";

describe("Verify override", () => {
  // this test is currently failing
  test("can call the overridden function", () => {
    //@ts-ignore
    actions.bar = jest.fn(() => {
      return 4;
    });
    expect(actions.foo()).toBe(8);
  });

  test("it is actually mocked", () => {
    expect(actions.bar()).toBe(4);
  });
});
