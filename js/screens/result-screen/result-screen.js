import switchScreen from '../../utils/switchScreen';
import ResultScreenView from './result-screen-view';
import Application from '../../application';

class ResultScreen {
  init(state) {
    this.view = new ResultScreenView(state);
    switchScreen(this.view);

    this.view.onGameRestart = () => {
      Application.showGame();
    };
  }
}

export default new ResultScreen();
