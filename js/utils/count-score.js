import GameData from '../data/game-data';

const countScore = (answers) => {
  if (answers.length < GameData.ANSWERS_COUNT) {
    return -1;
  }

  return answers.reduce((result, answer) => {
    return result + parseInt(answer, 10);
  }, 0);
};

export default countScore;
