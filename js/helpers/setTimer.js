const setTimer = (seconds) => {
  if (seconds === 0) {
    return `time expired`;
  }
  return {
    value: seconds,
    tick: () => {
      return setTimer(seconds - 1);
    }
  };
};

export default setTimer;
