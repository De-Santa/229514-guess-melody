import BaseScreenView from '../../utils/view';
import createArtistLevel from './artistLevel/artistLevel';
import {createGenreLevel, getGenreUserAnswer, handleGenreAnswerBtn} from './genreLevel/genreLevel';

const createGameStateUi = (gameState) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
     ${new Array(gameState.lives)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
    </div>
  `.trim();
};

class GameScreenView extends BaseScreenView {

  constructor(gameState, currentLevel) {
    super();
    this.gameState = gameState;
    this.levelData = currentLevel;
    console.log(`gameState from game screen`, this.gameState);
    console.log(`gameLevel from game screen`, this.levelData);
  }

  get screenTemplate() {
    const {gameState, levelData} = this;
    return `
    <section id="game-${levelData.type}" class="main main--level main--level-${levelData.type}">
      ${createGameStateUi(gameState)}
      ${this._createCurrentLevel(levelData)}
    </section>
    `.trim();
  }

  _createCurrentLevel(currentLevel) {
    switch (currentLevel.type) {
      case `artist`:
        return createArtistLevel(currentLevel);
      case `genre`:
        return createGenreLevel(currentLevel);
      default:
        return null;
    }
  }

  setScreenEvents() {
    const {gameState, levelData} = this;
    const gameScreen = this.screenElement;
    let playerAnswer;

    gameScreen.addEventListener(`click`, (event) => {
      switch (event.target.className) {
        case `main-answer`:
          console.log(event.target);
          console.log(event.target.className);
          playerAnswer = event.target.getAttribute(`for`);
          return this.checkAnswer(playerAnswer, levelData, gameState);

        case `genre-answer-check`:
          return handleGenreAnswerBtn(gameScreen);

        case `genre-answer-send`:
          event.preventDefault();
          console.log(`genre btn clicked`);
          playerAnswer = false;
          return this.checkAnswer(playerAnswer, levelData, gameState);
        default:
          return null;
      }
    });
  }

  checkAnswer() {

  }
}

export default GameScreenView;
