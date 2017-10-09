/*eslint-disable */
import assert from 'assert';
import countResult from '../helpers/countResult'

describe(`countResult function`, () => {
  it(`should return "У вас закончились все попытки. Ничего, повезёт в следующий раз!" message if player has no lives left`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, countResult(test_result_1));
  });
  it(`should return "Время вышло! Вы не успели отгадать все мелодии" message if player has no time left`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, countResult(test_result_2));
  });
  it(`should return "Вы заняли 1-е место из 10 игроков. Это лучше чем у 90% игроков." message if player got 1st place in global statistic`, () => {
    assert.equal(`Вы заняли 1-е место из 10 игроков. Это лучше чем у 90% игроков.`, countResult(test_result_3));
  });
  it(`should return "Вы заняли 10-е место из 10 игроков. Это лучше чем у 0% игроков." message if player got 10th place in global statistic`, () => {
    assert.equal(`Вы заняли 10-е место из 10 игроков. Это лучше чем у 0% игроков.`, countResult(test_result_4));
  });
  it(`should return "Вы заняли 5-е место из 10 игроков. Это лучше чем у 50% игроков." message if player got 5th place in global statistic`, () => {
    assert.equal(`Вы заняли 5-е место из 10 игроков. Это лучше чем у 50% игроков.`, countResult(test_result_5));
  });
});

const test_result_1 = {
  globalScores: [11,2,3,12,5,7,8,3,4],
  playerResult: {score: 10, livesLeft: 0, timeLeft: 10}
};
const test_result_2 = {
  globalScores: [11,2,3,12,5,7,8,3,4],
  playerResult: {score: 10, livesLeft: 3, timeLeft: 0}
};
const test_result_3 = {
  globalScores: [11,2,3,12,5,7,8,3,4],
  playerResult: {score: 13, livesLeft: 3, timeLeft: 10}
};
const test_result_4 = {
  globalScores: [11,2,3,12,5,7,8,3,4],
  playerResult: {score: 1, livesLeft: 3, timeLeft: 10}
};

const test_result_5 = {
  globalScores: [11,1,3,12,9,8,4,2,3],
  playerResult: {score: 7, livesLeft: 3, timeLeft: 10}
};

