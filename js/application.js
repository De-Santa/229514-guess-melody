import welcomeScreen from './screens/welcome-screen/welcome-screen';
import gameScreen from './screens/game-screen/game-screen';
import resultScreen from './screens/result-screen/result-screen';

export default class Application {
  static showWelcome() {
    welcomeScreen.init();
  }

  static showGame() {
    gameScreen.init();
  }

  static showStats(stats) {
    resultScreen.init(stats);
  }

}
