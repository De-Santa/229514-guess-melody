import switchScreen from '../../utils/switch-screen';
import GameScreenView from './game-screen-view';
import GameScreenModel from './game-screen-model';
import initialGameState from '../../data/initial-game-state';
import GameData from '../../data/game-data';
import Application from '../../application';


class GameScreen {
  constructor(questions) {
    this.model = new GameScreenModel(questions);
  }

  init() {
    this.model.update(initialGameState);
    this.view = new GameScreenView(this.model);
    this.view.onAnswer = this.onAnswer.bind(this);
    switchScreen(this.view);
    this._intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  onAnswer(isCorrect) {
    this.view.stopActiveAudio();

    this.model.onAnswer(true);
    if (this.model.isLastLevel || this.model.isMistakesLeft) {
      this.gameOver();
    } else {
      this.model.nextLevel();
      this.view.updateLevel();
    }
  }

  gameOver() {
    clearTimeout(this._intervalId);
    const data = {
      answers: this.model.answers,
      mistakes: this.model.state.mistakes,
      time: GameData.START_TIME - this.model.state.time,
    };
    if (data.answers.length === GameData.ANSWERS_COUNT) {
      Application.showStats(data);
    } else {
      Application.showLooseScreen(data);
    }
  }

  tick() {
    this.model.tick();
    if (this.model.isTimeLeft) {
      this.gameOver();
    } else {
      this.view.updateTimer();
    }
  }
}

export default GameScreen;
