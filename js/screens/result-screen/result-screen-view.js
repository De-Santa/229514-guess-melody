import BaseScreenView from '../../utils/view';
import gameLogo from '../../components/game-logo';
import gameData from '../../data/game-data';
import countScore from '../../utils/count-score';

const failTimeoutTemplate = `
  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br />Вы не успели отгадать все мелодии</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
`;

const failMistakesTemplate = `
  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br />Ничего, повезёт в следующий раз!</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
`;

const successTemplate = (data) => {
  console.log(data);
  const time = gameData.START_TIME - data.time;
  const fastAnswers = data.answers.filter((answer) => {
    return answer.time <= gameData.FAST_ANSWER_MAX_TIME;
  }).length;

  return `
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${(time - time % 60) / 60}&nbsp;минуты и ${time % 60}&nbsp;секунд
      <br />вы&nbsp;набрали ${countScore(data.answers)} баллов (${fastAnswers} быстрых)
      <br />совершив ${data.mistakes} ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  `;
};

class WelcomeScreenView extends BaseScreenView {

  constructor(gameState) {
    super();
    this.gameState = gameState;
  }

  get template() {
    return `
      <section id='fail-mistakes' class="main main--result">
        ${gameLogo}
        ${this.currentResultTemplate}
      </section>
    `.trim();
  }

  get currentResultTemplate() {
    if (this.gameState.mistakes > gameData.MAX_MISTAKES) {
      return failMistakesTemplate;
    } else if (this.gameState.time === 0) {
      return failTimeoutTemplate;
    }
    return successTemplate(this.gameState);
  }

  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, () => {
      this.onGameRestart();
    });
  }

  onGameRestart() {}
}

export default WelcomeScreenView;
