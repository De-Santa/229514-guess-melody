import gameData from '../data/game-data';
import gameLevels from '../data/game-levels';

const countScore = (answers) => {
  if (answers.length < gameLevels.length) {
    return -1;
  }

  return answers.reduce((result, answer) => {
    if (answer.isCorrect) {
      return result + (answer.time <= gameData.FAST_ANSWER_MAX_TIME ? gameData.FAST_ANSWER_POINTS : gameData.SLOW_ANSWER_POINTS);
    } else {
      return result + gameData.WRONG_ANSWER_POINTS;
    }
  }, 0);
};

export default countScore;
