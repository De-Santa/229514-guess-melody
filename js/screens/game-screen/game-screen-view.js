import BaseScreenView from '../../utils/view';
import mistakesTemplate from '../../components/mistakes';
import timerTemplate from '../../components/timer';
import GenreLevel from './levels/genre-level';
import ArtistLevel from './levels/artist-level';
import GameData from '../../data/game-data';


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

  stopActiveAudio() {
    if (this._activePlayerButton) {
      this._activePlayerButton.classList.toggle(`player-control--pause`);
      this._activeAudio.pause();
    }
  }

  updateLevel() {
    const CurrentLevelConstructor = LEVELS[this.model.levelData.type];

    if (this._gameLevel) {
      this._gameLevel.element.remove();
    }

    this._gameLevel = new CurrentLevelConstructor(this.model.levelData);
    this._gameLevel.onAnswer = (answer) => {
      this.onAnswer(answer);
    };
    this.element.appendChild(this._gameLevel.element);
    setTimeout(() => {
      this.element.querySelector(`.player-control`).click();
    });

    this._mistakesWrap.innerHTML = mistakesTemplate(this.model.state.mistakes);
  }

  updateTimer() {
    const seconds = this.model.state.time;
    this._timerMins.textContent = `0${seconds / 60 >> 0}`.slice(-2);
    this._timerSecs.textContent = `0${seconds % 60}`.slice(-2);

    this._timerLine.setAttribute(`stroke-dashoffset`, this.model.dashoffset);

    if (seconds === GameData.START_BLINK_TIME) {
      this._timer.classList.add(`timer-value--finished`);
    }
  }

  bind() {
    this._timer = this.element.querySelector(`.timer-value`);
    this._timerMins = this.element.querySelector(`.timer-value-mins`);
    this._timerSecs = this.element.querySelector(`.timer-value-secs`);
    this._timerLine = this.element.querySelector(`.timer-line`);
    this._timerLine.setAttribute(`stroke-dasharray`, GameData.START_TIMER_DASHOFFSET);
    this._mistakesWrap = this.element.querySelector(`.main-mistakes`);

    this.element.addEventListener(`click`, (event) => {
      if (event.target.classList.contains(`player-control`)) {
        this.stopActiveAudio();

        if (this._activePlayerButton === event.target) {
          this._activePlayerButton = null;
          this._activeAudio = null;
        } else {
          event.target.classList.toggle(`player-control--pause`);
          this._activePlayerButton = event.target;
          this._activeAudio = event.target.parentNode.querySelector(`audio`);
          this._activeAudio.play();
        }

        event.preventDefault();
      }
    });
    this.updateTimer();
    this.updateLevel();
  }

  onAnswer() {}
}

export default GameScreenView;
