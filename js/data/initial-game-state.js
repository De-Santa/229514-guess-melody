import gameData from './game-data';

const initialGameState = Object.freeze({
  time: gameData.START_TIME,
  mistakes: 0,
  levelsAmount: 10,
  currentLevel: 0,
  answers: []
});

export default initialGameState;
