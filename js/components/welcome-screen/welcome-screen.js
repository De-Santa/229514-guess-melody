import switchScreen from '../../utils/switchScreen';
import WelcomeScreenView from './welcome-screen-view';
import gameScreen from '../game-screen/game-screen';
import initialGameState from '../../data/initial-game-state';


export default () => {
  const welcomeScreen = new WelcomeScreenView(initialGameState);
  welcomeScreen.onGameStart = () => {
    switchScreen(gameScreen(initialGameState));
  };

  return welcomeScreen;
};
