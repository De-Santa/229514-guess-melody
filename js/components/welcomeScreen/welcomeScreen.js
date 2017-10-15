import switchScreen from '../../utils/switchScreen';
import WelcomeScreenView from './WelcomeScreenView';
import gameScreen from '../gameScreen/gameScreen';
import initialGameState from '../../data/initialGameState';

const welcomeScreen = new WelcomeScreenView(initialGameState);
welcomeScreen.onGameStart = () => {
  switchScreen(gameScreen());
};

export default () => welcomeScreen;
