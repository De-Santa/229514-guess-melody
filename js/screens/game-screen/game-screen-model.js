import gameLevels from '../../data/game-levels';
import gameData from '../../data/game-data';

const answerCodes = {
  FAST: 2,
  SLOW: 1,
  WRONG: 0,
};

class GameScreenModel {
  constructor(state) {
    this.state = state;
  }

  get levelData() {
    return gameLevels[this.state.currentLevel];
  }

  get isLastLevel() {
    return this.state.currentLevel === gameLevels.length - 1;
  }

  get isMistakesLeft() {
    return this.state.mistakes > gameData.MAX_MISTAKES;
  }

  get isTimeLeft() {
    return this.state.time === 0;
  }

  get answers() {
    return this.state.answers;
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
      return (answer.isFast ? answerCodes.FAST : answerCodes.SLOW);
    }
    return answerCodes.WRONG;
  }

  get answersString() {
    return this.answers.join(``);
  }

  onAnswer(isCorrect) {
    const isFast = this.state.currentLevelTime <= gameData.FAST_ANSWER_MAX_TIME;
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