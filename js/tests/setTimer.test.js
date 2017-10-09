import assert from 'assert';
import setTimer from '../helpers/setTimer';

const timer = setTimer(30);
const timerValueAfterTick = timer.tick().value;
const expired = setTimer(0);

describe(`setTimer function`, () => {
  it(`should return 29 after timer 1 tick from 30`, () => {
    assert.equal(29, timerValueAfterTick);
  });
  it(`should return "time expired" message after time expires`, () => {
    assert.equal(`time expired`, expired);
  });
});
