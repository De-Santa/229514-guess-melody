import switchScreen from '../../utils/switchScreen';
import GameScreenView from './game-screen-view';
import GameScreenModel from './game-screen-model';
import initialGameState from '../../data/initial-game-state';
import Application from '../../application';


class GameScreen {
  init() {
    this.model = new GameScreenModel(initialGameState);
    this.view = new GameScreenView(this.model);
    this.view.onAnswer = this.onAnswer.bind(this);
    switchScreen(this.view);
    this._intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  onAnswer(isCorrect) {
    this.model.onAnswer(isCorrect);

    if (this.model.isLastLevel || this.model.isMistakesLeft) {
      this.gameOver();
    } else {
      this.model.nextLevel();
      this.view.updateLevel();
    }
  }

  gameOver() {
    clearTimeout(this._intervalId);
    Application.showStats(JSON.stringify({
      answers: this.model.answersString,
      mistakes: this.model.state.mistakes,
      time: this.model.state.time,
    }));
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

export default new GameScreen();
