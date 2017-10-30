import switchScreen from '../../utils/switchScreen';
import GameScreenView from './game-screen-view';
import resultScreen from '../result-screen/result-screen';
import gameLevels from '../../data/game-levels';
import gameData from '../../data/game-data';
import Timer from '../../utils/timer';

const gameScreen = (gameState) => {
  let currentGameState = gameState;
  const gameScreenView = new GameScreenView(currentGameState);
  const timer = new Timer(currentGameState.time);

  const intervalId = setInterval(() => {
    timer.tick();
    currentGameState = Object.assign({}, currentGameState, {time: timer.value});
    if (timer.value > 0) {
      gameScreenView.updateTimer(timer.value);
    } else {
      clearTimeout(intervalId);
      switchScreen(resultScreen(currentGameState));
    }
  }, 1000);

  gameScreenView.onAnswer = (answer) => {
    currentGameState = Object.assign({}, currentGameState);

    currentGameState.answers.push(answer);
    if (!answer.isCorrect) {
      currentGameState.mistakes += 1;
    }

    if (currentGameState.currentLevel === gameLevels.length - 1 || currentGameState.mistakes > gameData.MAX_MISTAKES) {
      clearTimeout(intervalId);
      switchScreen(resultScreen(currentGameState));
    } else {
      clearTimeout(intervalId);
      currentGameState.currentLevel += 1;
      switchScreen(gameScreen(currentGameState));
    }

  };

  return gameScreenView;
};

export default gameScreen;