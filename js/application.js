import welcomeScreen from './screens/welcome-screen/welcome-screen';
import GameScreen from './screens/game-screen/game-screen';
import splashScreen from './screens/splash-screen/splash-screen';
import resultScreen from './screens/result-screen/result-screen';
import looseScreen from './screens/loose-screen/loose-screen';
import switchScreen from './utils/switch-screen';
import Loader from './loader';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
  LOOSE: `loose`,
};

export default class Application {
  static async init() {
    switchScreen(splashScreen);

    const hashChangeHandler = () => {
      const id = location.hash.replace(`#`, ``);
      Application.changeHash(id);
    };

    window.onhashchange = hashChangeHandler;

    try {
      const questions = await Loader.loadQuestions();
      Application.routes = {
        [ControllerId.WELCOME]: welcomeScreen,
        [ControllerId.GAME]: new GameScreen(questions),
        [ControllerId.LOOSE]: looseScreen,
        [ControllerId.RESULT]: resultScreen,
      };
      hashChangeHandler();
    } catch (e) {
      alert('бляяя');
    }
  }

  static changeHash(id) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init();
    }
  }

  static showWelcome() {
    location.hash = ControllerId.WELCOME;
  }

  static showGame() {
    location.hash = ControllerId.GAME;
  }

  static restartGame() {
    Application.routes[ControllerId.GAME].init();
  }

  static showLooseScreen(data) {
    Application.routes[ControllerId.LOOSE].init(data);
  }

  static async showStats(playerStats) {
    switchScreen(splashScreen);

    await Loader.saveStats(playerStats);
    const allStats = await Loader.loadStats();

    Application.routes[ControllerId.RESULT].init(playerStats, allStats);
  }

}
