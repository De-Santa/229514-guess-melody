import gameLevels from '../../data/game-levels';
import gameData from '../../data/game-data';


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

  onAnswer(isCorrect) {
    const time = this.state.currentLevelTime;
    this.update({
      answers: this.state.answers.concat([{isCorrect, time}]),
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