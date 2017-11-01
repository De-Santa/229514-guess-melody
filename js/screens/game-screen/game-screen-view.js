import BaseScreenView from '../../utils/view';
import mistakesTemplate from '../../components/mistakes';
import timerTemplate from '../../components/timer';
import GenreLevel from './levels/genre-level';
import ArtistLevel from './levels/artist-level';

const LEVELS = {
  artist: ArtistLevel,
  genre: GenreLevel
};

class GameScreenView extends BaseScreenView {
  constructor(model) {
    super();
    this.model = model;
  }

  get template() {
    return `
      <section id="game-${this.model.levelData.type}" class="main main--level main--level-${this.model.levelData.type}">
        ${timerTemplate}
        <div class="main-mistakes"></div>
        <div class="main-wrap"></div>
      </section>
    `.trim();
  }

  bind() {
    this._timerMins = this.element.querySelector(`.timer-value-mins`);
    this._timerSecs = this.element.querySelector(`.timer-value-secs`);
    this._levelWrap = this.element.querySelector(`.main-wrap`);
    this._mistakesWrap = this.element.querySelector(`.main-mistakes`);
    this.updateTimer();
    this.updateLevel();
  }

  updateLevel() {
    const CurrentLevelConstructor = LEVELS[this.model.levelData.type];
    this._gameLevel = new CurrentLevelConstructor(this.model.levelData);
    this._gameLevel.onAnswer = (answer) => {
      this.onAnswer(answer);
    };
    this._mistakesWrap.innerHTML = mistakesTemplate(this.model.state.mistakes);
    this._levelWrap.innerHTML = ``;
    this._levelWrap.appendChild(this._gameLevel.element);
  }

  updateTimer() {
    const seconds = this.model.state.time;
    this._timerMins.textContent = `0${seconds / 60 >> 0}`.slice(-2);
    this._timerSecs.textContent = `0${seconds % 60}`.slice(-2);
  }

  onAnswer() {}
}

export default GameScreenView;
