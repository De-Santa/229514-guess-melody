import switchScreen from '../../utils/switch-screen';
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

  letStart() {
    this.view.letStart();
  }

  setInfoText(text) {
    this.view.setInfoText(text);
  }
}

export default new WelcomeScreen();
