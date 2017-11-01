import switchScreen from '../../utils/switchScreen';
import Application from '../../application';
import WelcomeScreenView from './welcome-screen-view';


class WelcomeScreen {
  init() {
    this.view = new WelcomeScreenView();
    switchScreen(this.view);

    this.view.onGameStart = () => {
      Application.showGame();
    };
  }
}

export default new WelcomeScreen();
