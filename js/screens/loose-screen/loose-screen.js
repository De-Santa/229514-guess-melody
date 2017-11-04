import BaseScreenView from '../../utils/view';
import switchScreen from '../../utils/switch-screen';
import gameLogo from '../../components/game-logo';
import GameData from '../../data/game-data';
import Application from '../../application';

const failTimeoutTemplate = `
  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br />Вы не успели отгадать все мелодии</div>
`;

const failMistakesTemplate = `
  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br />Ничего, повезёт в следующий раз!</div>
`;

class LooseScreen extends BaseScreenView {
  get template() {
    return `
      <section class="main main--result">
        ${gameLogo}
        ${this.currentResultTemplate}
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>  
      </section>
    `.trim();
  }

  get currentResultTemplate() {
    return (this.data.mistakes > GameData.MAX_MISTAKES ? failMistakesTemplate : failTimeoutTemplate);
  }

  init(data) {
    this.data = data;
    switchScreen(this);
  }

  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, () => {
      this.onGameRestart();
    });
  }

  onGameRestart() {
    Application.restartGame();
  }
}

export default new LooseScreen();
