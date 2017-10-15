import switchScreen from '../../utils/switchScreen';
import GameScreenView from './GameScreenView';
import initialGameState from '../../data/initialGameState';
import gameLevels from "../../data/gameLevels";

const initialLevel = gameLevels[0];

// let playerAnswers = [];

const gameScreen = new GameScreenView(initialGameState, initialLevel);

gameScreen.checkAnswer = (playerAnswer, levelData, gameState) => {
  console.log(`playerAnswer`, playerAnswer);
  console.log(`levelData`, levelData);
  console.log(`gameState`, gameState);
  const currentGameState = Object.assign({}, gameState);
  if (!playerAnswer) {
    currentGameState.lives = currentGameState.lives - 1;
  }
  currentGameState.currentLevel = currentGameState.currentLevel + 1;
  console.log(`currentLevel`, currentGameState.currentLevel);
  const nextLevel = gameLevels[currentGameState.currentLevel];
  const nextGameScreen = new GameScreenView(currentGameState, nextLevel);
  switchScreen(nextGameScreen);
}

export default () => gameScreen;
