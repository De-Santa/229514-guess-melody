import BaseScreenView from '../../utils/view';
import gameLogo from '../game-logo';

class WelcomeScreenView extends BaseScreenView {

  constructor(initialGameState) {
    super();
    this.gameState = initialGameState;
    console.log(`this.gameState from welcome screen`, this.gameState);
  }

  get template() {

    return `
      <section id='fail-mistakes' class="main main--result">
        ${gameLogo}
        <h2 class="title">Какая жалость!</h2>
        <div class="main-stat">У вас закончились все попытки.<br />Ничего, повезёт в следующий раз!</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `.trim();
  }

  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, () => {
      this.onGameRestart();
    });
  }

  onGameRestart() {

  }
}

export default WelcomeScreenView;
