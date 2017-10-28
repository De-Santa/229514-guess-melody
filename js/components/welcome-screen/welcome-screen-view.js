import BaseScreenView from '../../utils/view';
import gameLogo from '../game-logo';

class WelcomeScreenView extends BaseScreenView {

  constructor(initialGameState) {
    super();
    this.gameState = initialGameState;
    console.log(`this.gameState from welcome screen`, this.gameState);
  }

  get template() {
    const {time, lives} = this.gameState;

    return `
    <section id="welcome" class="main main--welcome">
      ${gameLogo}
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;${time} минут ответить на все вопросы.<br />
        Ошибиться можно ${lives} раза.<br />
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
