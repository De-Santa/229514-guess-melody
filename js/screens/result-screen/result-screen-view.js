import BaseScreenView from '../../utils/view';
import gameLogo from '../../components/game-logo';
import GameData from '../../data/game-data';
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
  const time = GameData.START_TIME - data.time;
  const answersArray = data.answers.split(``);
  const fastAnswers = answersArray.filter((answer) => {
    return answer === `2`;
  }).length;

  return `
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${(time - time % 60) / 60}&nbsp;минуты и ${time % 60}&nbsp;секунд
      <br />вы&nbsp;набрали ${countScore(answersArray)} баллов (${fastAnswers} быстрых)
      <br />совершив ${data.mistakes} ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  `;
};

class ResultScreenView extends BaseScreenView {
  constructor(data) {
    super();
    this.data = data;
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
    if (this.data.mistakes > GameData.MAX_MISTAKES) {
      return failMistakesTemplate;
    } else if (this.data.time === 0) {
      return failTimeoutTemplate;
    }
    return successTemplate(this.data);
  }

  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, () => {
      this.onGameRestart();
    });
  }

  onGameRestart() {}
}

export default ResultScreenView;
