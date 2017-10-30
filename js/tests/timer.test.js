import assert from 'assert';
import Timer from '../utils/timer';


describe(`setTimer function`, () => {
  it(`should return 29 after timer 1 tick from 30`, () => {
    const timer = new Timer(30);
    timer.tick();
    assert.equal(29, timer.value);
  });

  it(`Should create new timer with settled time`, () => {
    const timer = new Timer(30);
    assert.equal(timer.value, 30);
  });

  it(`Should return false if counter stopped`, () => {
    const timer = new Timer(0);
    assert.equal(timer.tick(), false);
  });

  it(`Should return true if counter continues`, () => {
    const timer = new Timer(5);
    assert.equal(timer.tick(), true);
  });
});
