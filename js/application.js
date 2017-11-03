import welcomeScreen from './screens/welcome-screen/welcome-screen';
import GameScreen from './screens/game-screen/game-screen';
import resultScreen from './screens/result-screen/result-screen';
import Loader from './loader';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

export default class Application {
  static async init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      Application.changeHash(id, data);
    };

    window.onhashchange = hashChangeHandler;

    try {
      const questions = await Loader.loadQuestions();
      Application.routes = {
        [ControllerId.WELCOME]: welcomeScreen,
        [ControllerId.GAME]: new GameScreen(questions),
        [ControllerId.RESULT]: resultScreen
      };
      hashChangeHandler();
    } catch (e) {
      alert('бляяя');
    }
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(data && JSON.parse(atob(data)));
    }
  }

  static showWelcome() {
    location.hash = ControllerId.WELCOME;
  }

  static showGame() {
    location.hash = ControllerId.GAME;
  }

  static showStats(data) {
    location.hash = `${ControllerId.RESULT}?${btoa(data)}`;
  }

}
