import {
  defer,
  printRandomAfter,
  printRandomAfter2,
  setTimeoutInMinutes,
  setTimeoutInSeconds,
  setTimeoutInSecondsReturningPromise,
} from "./index";

describe("Defer function", () => {
  it("should throw callback", () => {
    const temp = jest.fn();
    defer(temp);

    expect(temp).toHaveBeenCalledTimes(1);
  });
});

describe("setTimeoutInSeconds with fake timers", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  // test("should throw callback after time in s", (done) => {
  //   const temp = jest.fn();
  //   expect.assertions(1);
  //   function callback() {
  //     temp();
  //     expect(temp).toHaveBeenCalled();
  //     done();
  //   }
  //   setTimeoutInSeconds(callback, 1);
  // });

  test("should throw callback after time in s with fake time", (done) => {
    const mock = jest.fn();

    expect.assertions(2);

    function callback() {
      mock();
      expect(mock).toHaveBeenCalledTimes(1);
      done();
    }

    setTimeoutInSeconds(callback, 1);
    jest.advanceTimersByTime(999);
    expect(mock).not.toBeCalled();
    jest.advanceTimersByTime(1);
  });

  it("should be called after set amount of time with promise", () => {
    return new Promise<void>((resolve) => {
      const mock = jest.fn();
      expect.assertions(2);

      setTimeoutInSecondsReturningPromise(mock, 1).then(() => {
        expect(mock).toHaveBeenCalledTimes(1);
        resolve();
      });

      jest.advanceTimersByTime(999);
      expect(mock).not.toBeCalled();
      jest.advanceTimersByTime(1);
    });
  });

  it("should be called after set amount of time with async/await", async () => {
    const mock = jest.fn();
    expect.assertions(2);

    await setTimeoutInSecondsReturningPromise(mock, 1);

    expect(mock).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(999);
    expect(mock).not.toBeCalled();
    jest.advanceTimersByTime(1);
  });

  test("should throw callback after time in m", (done) => {
    const temp = jest.fn();
    expect.assertions(1);
    function callback() {
      temp();
      expect(console.log).toHaveBeenCalledWith();
      done();
    }
    setTimeoutInMinutes(callback, 1);
  });
});

describe("printRandomNumber", () => {
  test("print random number", (done) => {
    printRandomAfter2();
  });
});
