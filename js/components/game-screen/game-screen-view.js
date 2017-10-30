import BaseScreenView from '../../utils/view';
import gameLevels from '../../data/game-levels';
import mistakes from '../mistakes';
import timer from '../timer';
import GenreLevel from './levels/genre-level';
import ArtistLevel from './levels/artist-level';

const LEVELS = {
  artist: ArtistLevel,
  genre: GenreLevel
};

class GameScreenView extends BaseScreenView {
  constructor(gameState) {
    super();
    this.gameState = gameState;
    this.levelData = gameLevels[gameState.currentLevel];
    const CurrentLevelConstructor = LEVELS[this.levelData.type];
    this._gameLevel = new CurrentLevelConstructor(this.levelData);
  }

  get template() {
    const {gameState} = this;
    const levelData = gameLevels[gameState.currentLevel];
    return `
      <section id="game-${levelData.type}" class="main main--level main--level-${levelData.type}">
        ${timer(gameState.time)}
        ${mistakes(gameState.mistakes)}
        ${this._gameLevel.template}
      </section>
    `.trim();
  }

  bind() {
    const gameScreen = this.element;
    this._timerMins = gameScreen.querySelector(`.timer-value-mins`);
    this._timerSecs = gameScreen.querySelector(`.timer-value-secs`);
    this.updateTimer(this.gameState.time);

    this._gameLevel.handleLevelActions(gameScreen, this.onAnswer);
  }

  updateTimer(seconds) {
    this._timerMins.textContent = `0${seconds / 60 >> 0}`.slice(-2);
    this._timerSecs.textContent = `0${seconds % 60}`.slice(-2);
  }

  onAnswer() {}
}

export default GameScreenView;
