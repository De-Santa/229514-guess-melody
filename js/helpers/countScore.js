const FAST_ANSWER_TIME = 29;
const FAST_ANSWER_POINTS = 2;
const SLOW_ANSWER_POINTS = 1;
const WRONG_ANSWER_POINTS = -2;
const PLAYER_LIVES = 3;

const countScore = ({answers, livesLeft}) => {
  if (answers.length < 10) {
    return -1;
  }

  let totalScores = livesLeft - PLAYER_LIVES;

  answers.forEach((answer) => {
    if (answer.correct && answer.time <= FAST_ANSWER_TIME) {
      totalScores = totalScores + FAST_ANSWER_POINTS;
    } else if (answer.correct && answer.time > FAST_ANSWER_TIME) {
      totalScores = totalScores + SLOW_ANSWER_POINTS;
    } else if (!answer.correct) {
      totalScores = totalScores + WRONG_ANSWER_POINTS;
    }
  });

  if (totalScores < 0) {
    totalScores = 0;
  }

  return totalScores;
};

export default countScore;
