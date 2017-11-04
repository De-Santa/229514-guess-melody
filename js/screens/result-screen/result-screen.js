import switchScreen from '../../utils/switch-screen';
import Application from '../../application';
import BaseScreenView from '../../utils/view';
import gameLogo from '../../components/game-logo';
import countScore from '../../utils/count-score';
import countLoosers from '../../utils/count-loosers';


class ResultScreen extends BaseScreenView {
  get template() {
    const {time, answers, mistakes} = this.playerStats;

    const minuts = Math.floor(time / 60);
    const seconds = time % 60;

    const fastAnswers = answers.filter((answer) => answer === 2).length;
    const loosers = countLoosers(this.playerStats, this.allStats);
    const position = this.allStats.length - loosers;
    const percentages = loosers / this.allStats.length * 100;

    return `
      <section class="main main--result">
        ${gameLogo}
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">
          За&nbsp;${minuts}&nbsp;минуты и ${seconds}&nbsp;секунд
          <br />вы&nbsp;набрали ${countScore(answers)} баллов (${fastAnswers} быстрых)
          <br />совершив ${mistakes} ошибки
        </div>
        <span class="main-comparison">Вы заняли ${position} место из ${this.allStats.length}. Это&nbsp;лучше чем у&nbsp;${percentages}%&nbsp;игроков</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>
    `.trim();
  }

  init(playerStats, allStats) {
    this.playerStats = playerStats;
    this.allStats = allStats;
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

export default new ResultScreen();
