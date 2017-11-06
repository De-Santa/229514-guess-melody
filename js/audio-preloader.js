const LOADING_AUDIOS_TOGETHER_COUNT = 5;
const TIME_FOR_LOADING = 20000;

class AudioPreloader {
  constructor() {
    this._preloadedAudios = {};
  }

  getAudioFromSrc(src) {
    return this._preloadedAudios[src];
  }

  async preloadAudios(urls) {
    const steps = Math.ceil(urls.length / LOADING_AUDIOS_TOGETHER_COUNT);
    for (let step = 0; step < steps; step++) {
      const start = step * LOADING_AUDIOS_TOGETHER_COUNT;
      const end = start + LOADING_AUDIOS_TOGETHER_COUNT;
      await Promise.all(urls.slice(start, end).map((src) => {
        return this._preloadAudio(src);
      }));
    }
  }

  _preloadAudio(src) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      this._preloadedAudios[src] = audio;

      const timerId = setTimeout(() => {
        reject(new Error(`Не удалось загрузить некоторые песни :(`));
      }, TIME_FOR_LOADING);

      audio.addEventListener(`canplaythrough`, () => {
        clearTimeout(timerId);
        resolve();
      }, false);

      audio.setAttribute(`src`, src);
      audio.load();
    });
  }
}

export default new AudioPreloader();
