export const defer = (callback: () => any) => {
  callback();
};

export const setTimeoutInSeconds = (callback: () => any, time: number) => {
  setTimeout(() => {
    callback();
  }, time * 1000);
};

export const setTimeoutInMinutes = (callback: () => any, time: number) => {
  setTimeoutInSeconds(callback(), time * 60);
};
