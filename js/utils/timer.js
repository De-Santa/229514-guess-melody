export default class Timer {
  constructor(seconds) {
    this.value = seconds;
  }

  tick() {
    if (this.value === 0) {
      return false;
    }
    this.value--;
    return this.value === 0;
  }
}
