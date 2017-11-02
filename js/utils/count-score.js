import gameLevels from '../data/game-levels';

const countScore = (answers) => {
  if (answers.length < gameLevels.length) {
    return -1;
  }

  return answers.reduce((result, answer) => {
    return result + parseInt(answer, 10);
  }, 0);
};

export default countScore;
