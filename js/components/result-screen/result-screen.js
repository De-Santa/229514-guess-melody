import switchScreen from '../../utils/switchScreen';
import welcomeScreen from '../welcome-screen/welcome-screen';
import ResultScreenView from './result-screen-view';
import initialGameState from '../../data/initialGameState';


export default () => {
  const resultScreenView = new ResultScreenView(initialGameState);
  resultScreenView.onGameRestart = () => {
    switchScreen(welcomeScreen(initialGameState));
  };

  return resultScreenView;
};
