import switchScreen from '../../utils/switchScreen';
import GameScreenView from './game-screen-view';
import resultScreen from '../result-screen/result-screen';
import gameLevels from '../../data/gameLevels';

const gameScreen = (gameState) => {
  const gameScreenView = new GameScreenView(gameState);

  gameScreenView.onAnswer = (isRight, time) => {
    const currentGameState = Object.assign({}, gameState);

    if (!isRight) {
      currentGameState.lives = currentGameState.lives - 1;
    }
    currentGameState.currentLevel = currentGameState.currentLevel + 1;

    if (currentGameState.currentLevel < gameLevels.length) {
      switchScreen(gameScreen(currentGameState));
    } else {
      switchScreen(resultScreen(currentGameState));
    }
  };

  return gameScreenView;
};

export default gameScreen;