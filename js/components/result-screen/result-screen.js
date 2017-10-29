import switchScreen from '../../utils/switchScreen';
import welcomeScreen from '../welcome-screen/welcome-screen';
import ResultScreenView from './result-screen-view';
import initialGameState from '../../data/initial-game-state';


export default (gameState) => {
  const resultScreenView = new ResultScreenView(gameState);
  resultScreenView.onGameRestart = () => {
    switchScreen(welcomeScreen(initialGameState));
  };

  return resultScreenView;
};
