import assert from 'assert';
import countScore from '../helpers/countScore';

describe(`countScore function`, () => {
  it(`should return -1 if player answered less than 10 questions`, () => {
    assert.equal(-1, countScore(testAnswer1));
  });
  it(`should return 20 if player gave 10 fast answers and has 3 lives left`, () => {
    assert.equal(20, countScore(testAnswer2));
  });
  it(`should return 0 if player gave 10 wrong answers and has 0 lives left`, () => {
    assert.equal(0, countScore(testAnswer3));
  });
  it(`should return 7 if player gave 5 fast 3 slow 2 wrong answers and has 1 lives left`, () => {
    assert.equal(7, countScore(testAnswer4));
  });
  it(`should return 11 if player gave 5 fast 4 slow 1 wrong answers and has 2 lives left`, () => {
    assert.equal(11, countScore(testAnswer5));
  });
  it(`should return 10 if player gave 10 slow answers and has 3 lives left`, () => {
    assert.equal(10, countScore(testAnswer6));
  });
});

const testAnswer1 = {
  answers: [
    {isCorrect: true, time: 11},
    {isCorrect: false, time: 32},
    {isCorrect: true, time: 12},
    {isCorrect: true, time: 18},
    {isCorrect: false, time: 16},
    {isCorrect: true, time: 8},
    {isCorrect: true, time: 1},
    {isCorrect: false, time: 13},
    {isCorrect: true, time: 10},
  ],
  livesLeft: 3
};
const testAnswer2 = {
  answers: [
    {isCorrect: true, time: 11},
    {isCorrect: true, time: 29},
    {isCorrect: true, time: 12},
    {isCorrect: true, time: 18},
    {isCorrect: true, time: 16},
    {isCorrect: true, time: 8},
    {isCorrect: true, time: 1},
    {isCorrect: true, time: 13},
    {isCorrect: true, time: 10},
    {isCorrect: true, time: 10},
  ],
  livesLeft: 3
};
const testAnswer3 = {
  answers: [
    {isCorrect: false, time: 11},
    {isCorrect: false, time: 32},
    {isCorrect: false, time: 12},
    {isCorrect: false, time: 18},
    {isCorrect: false, time: 16},
    {isCorrect: false, time: 8},
    {isCorrect: false, time: 1},
    {isCorrect: false, time: 13},
    {isCorrect: false, time: 10},
    {isCorrect: false, time: 10},
  ],
  livesLeft: 0
};
const testAnswer4 = {
  answers: [
    {isCorrect: true, time: 10},
    {isCorrect: true, time: 28},
    {isCorrect: true, time: 33},
    {isCorrect: true, time: 35},
    {isCorrect: true, time: 16},
    {isCorrect: true, time: 8},
    {isCorrect: false, time: 1},
    {isCorrect: false, time: 13},
    {isCorrect: true, time: 10},
    {isCorrect: true, time: 32},
  ],
  livesLeft: 1
};
const testAnswer5 = {
  answers: [
    {isCorrect: true, time: 10},
    {isCorrect: true, time: 28},
    {isCorrect: true, time: 25},
    {isCorrect: true, time: 10},
    {isCorrect: true, time: 16},
    {isCorrect: true, time: 54},
    {isCorrect: false, time: 14},
    {isCorrect: true, time: 44},
    {isCorrect: true, time: 46},
    {isCorrect: true, time: 58},
  ],
  livesLeft: 2
};
const testAnswer6 = {
  answers: [
    {isCorrect: true, time: 32},
    {isCorrect: true, time: 33},
    {isCorrect: true, time: 33},
    {isCorrect: true, time: 35},
    {isCorrect: true, time: 33},
    {isCorrect: true, time: 32},
    {isCorrect: true, time: 34},
    {isCorrect: true, time: 54},
    {isCorrect: true, time: 43},
    {isCorrect: true, time: 33},
  ],
  livesLeft: 3
};
