import BaseScreenView from '../../utils/view';
import gameLogo from '../../components/game-logo';
import GameData from '../../data/game-data';

class WelcomeScreenView extends BaseScreenView {
  constructor() {
    super();
  }

  get template() {
    return `
      <section id="welcome" class="main main--welcome">
        ${gameLogo}
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;${GameData.START_TIME / 60} минут ответить на все вопросы.<br />
          Ошибиться можно ${GameData.MAX_MISTAKES} раза.<br />
          Удачи!
        </p>
      </section>
    `.trim();
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, () => {
      this.onGameStart();
    });
  }

  onGameStart() {

  }
}

export default WelcomeScreenView;
