import { defer, setTimeoutInSeconds } from "./index";

describe("Defer function", () => {
  it("should throw callback", () => {
    const temp = jest.fn();
    defer(temp);

    expect(temp).toHaveBeenCalledTimes(1);
  });

  test("should throw callback after time in s", (done) => {
    // jest.useFakeTimers();
    const temp = jest.fn();
    function callback() {
      temp();
      expect(temp).toHaveBeenCalled();
      done();
    }
    setTimeoutInSeconds(callback, 1);
  });
});
