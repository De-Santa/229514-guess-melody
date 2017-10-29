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
    {correct: true, time: 11},
    {correct: false, time: 32},
    {correct: true, time: 12},
    {correct: true, time: 18},
    {correct: false, time: 16},
    {correct: true, time: 8},
    {correct: true, time: 1},
    {correct: false, time: 13},
    {correct: true, time: 10},
  ],
  livesLeft: 3
};
const testAnswer2 = {
  answers: [
    {correct: true, time: 11},
    {correct: true, time: 29},
    {correct: true, time: 12},
    {correct: true, time: 18},
    {correct: true, time: 16},
    {correct: true, time: 8},
    {correct: true, time: 1},
    {correct: true, time: 13},
    {correct: true, time: 10},
    {correct: true, time: 10},
  ],
  livesLeft: 3
};
const testAnswer3 = {
  answers: [
    {correct: false, time: 11},
    {correct: false, time: 32},
    {correct: false, time: 12},
    {correct: false, time: 18},
    {correct: false, time: 16},
    {correct: false, time: 8},
    {correct: false, time: 1},
    {correct: false, time: 13},
    {correct: false, time: 10},
    {correct: false, time: 10},
  ],
  livesLeft: 0
};
const testAnswer4 = {
  answers: [
    {correct: true, time: 10},
    {correct: true, time: 28},
    {correct: true, time: 33},
    {correct: true, time: 35},
    {correct: true, time: 16},
    {correct: true, time: 8},
    {correct: false, time: 1},
    {correct: false, time: 13},
    {correct: true, time: 10},
    {correct: true, time: 32},
  ],
  livesLeft: 1
};
const testAnswer5 = {
  answers: [
    {correct: true, time: 10},
    {correct: true, time: 28},
    {correct: true, time: 25},
    {correct: true, time: 10},
    {correct: true, time: 16},
    {correct: true, time: 54},
    {correct: false, time: 14},
    {correct: true, time: 44},
    {correct: true, time: 46},
    {correct: true, time: 58},
  ],
  livesLeft: 2
};
const testAnswer6 = {
  answers: [
    {correct: true, time: 32},
    {correct: true, time: 33},
    {correct: true, time: 33},
    {correct: true, time: 35},
    {correct: true, time: 33},
    {correct: true, time: 32},
    {correct: true, time: 34},
    {correct: true, time: 54},
    {correct: true, time: 43},
    {correct: true, time: 33},
  ],
  livesLeft: 3
};
