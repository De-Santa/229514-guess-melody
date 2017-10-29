import switchScreen from '../../utils/switchScreen';
import GameScreenView from './game-screen-view';
import resultScreen from '../result-screen/result-screen';
import gameLevels from '../../data/game-levels';
import gameData from '../../data/game-data';

const gameScreen = (gameState) => {
  const gameScreenView = new GameScreenView(gameState);

  gameScreenView.onAnswer = (answer) => {
    const currentGameState = Object.assign({}, gameState);

    currentGameState.answers.push(answer);
    if (!answer.isCorrect) {
      currentGameState.mistakes += 1;
    }
    console.log(currentGameState.mistakes, gameData.MAX_MISTAKES);
    if (currentGameState.currentLevel === gameLevels.length - 1 || currentGameState.mistakes > gameData.MAX_MISTAKES) {
      switchScreen(resultScreen(currentGameState));
    } else {
      currentGameState.currentLevel += 1;
      switchScreen(gameScreen(currentGameState));
    }
  };

  return gameScreenView;
};

export default gameScreen;