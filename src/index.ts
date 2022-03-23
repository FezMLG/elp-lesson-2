export const defer = (callback: () => any) => {
  callback();
};

export const setTimeoutInSeconds = (callback: () => any, time: number) => {
  setTimeout(() => {
    callback();
  }, time * 1000);
};

export const setTimeoutInSecondsReturningPromise = (
  callback: () => any,
  time: number
) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, time * 1000);
  });
};

export const setTimeoutInSecondsUsingAsync = (
  callback: () => any,
  time: number
) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, time * 1000);
  });
};

export const setTimeoutInMinutes = (callback: () => any, time: number) => {
  setTimeoutInSeconds(callback(), time * 60);
};

export const delay = (timeInSeconds: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeInSeconds * 1000);
  });
};

export const printRandomAfter = () => {
  let a: number, b: number, c: number;

  delay(1)
    .then(() => {
      a = getRandomInt();
      b = getRandomInt();
      console.log(a, b);
      return delay(1);
    })
    .then(() => {
      c = getRandomInt();
      console.log(b, c);
    });
};

export const printRandomAfter2 = async () => {
  const delay = (timeInSeconds: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeInSeconds * 1000);
    });
  };

  await delay(1);
  const a = getRandomInt();
  const b = getRandomInt();
  console.log(a, b);

  await delay(1);
  const c = getRandomInt();
  console.log(b, c);
};

function getRandomInt(min = 0, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
