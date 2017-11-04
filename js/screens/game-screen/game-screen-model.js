import GameData from '../../data/game-data';

const AnswerCodes = {
  FAST: 2,
  SLOW: 1,
  WRONG: 0,
};

class GameScreenModel {
  constructor(questions) {
    this.questions = questions;
  }

  get levelData() {
    return this.questions[this.state.currentLevel];
  }

  get isLastLevel() {
    return this.state.currentLevel === this.questions.length - 1;
  }

  get isMistakesLeft() {
    return this.state.mistakes > GameData.MAX_MISTAKES;
  }

  get isTimeLeft() {
    return this.state.time === 0;
  }

  get answers() {
    return this.state.answers;
  }

  get dashoffset() {
    return GameData.START_TIMER_DASHOFFSET / GameData.START_TIME * (GameData.START_TIME - this.state.time);
  }

  init(state) {
    this.state = state;
  }

  update(data) {
    this.state = Object.assign({}, this.state, data);
    return this.state;
  }

  nextLevel() {
    this.update({currentLevel: this.state.currentLevel + 1});
  }

  encodeAnswer(answer) {
    if (answer.isCorrect) {
      return (answer.isFast ? AnswerCodes.FAST : AnswerCodes.SLOW);
    }
    return AnswerCodes.WRONG;
  }

  onAnswer(isCorrect) {
    const isFast = this.state.currentLevelTime <= GameData.FAST_ANSWER_MAX_TIME;
    this.update({
      answers: this.state.answers.concat([
        this.encodeAnswer({isCorrect, isFast})
      ]),
      currentLevelTime: 0,
      mistakes: this.state.mistakes + (isCorrect ? 0 : 1)
    });
  }

  tick() {
    this.update({
      time: this.state.time - 1,
      currentLevelTime: this.state.currentLevelTime + 1
    });
  }
}

export default GameScreenModel;