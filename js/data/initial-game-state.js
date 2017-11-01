import gameData from './game-data';

const initialGameState = Object.freeze({
  time: gameData.START_TIME,
  currentLevelTime: 0,
  mistakes: 0,
  currentLevel: 0,
  answers: []
});

export default initialGameState;
