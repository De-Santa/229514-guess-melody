import switchScreen from '../../utils/switch-screen';
import Application from '../../application';
import BaseScreenView from '../../utils/view';
import gameLogo from '../../components/game-logo';
import countScore from '../../utils/count-score';
import countLoosers from '../../utils/count-loosers';
import normalizeTextForNum from '../../utils/normalize-text-for-num';


class ResultScreen extends BaseScreenView {
  get template() {
    const {time, answers, mistakes} = this.playerStats;

    const minuts = Math.floor(time / 60);
    const seconds = time % 60;

    const fastAnswers = answers.filter((answer) => answer === 2).length;
    const fastAnswersText = normalizeTextForNum(`быстры`, [`й`, `х`, `х`], fastAnswers);
    const loosers = countLoosers(this.playerStats, this.allStats);
    const position = this.allStats.length - loosers;
    const percentages = loosers / this.allStats.length * 100;
    const scores = countScore(answers);
    const scoresText = normalizeTextForNum(`балл`, [``, `а`, `ов`], scores);

    return `
      <section class="main main--result">
        ${gameLogo}
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">
          За&nbsp;${minuts}&nbsp;${normalizeTextForNum(`минут`, [`у`, `ы`, ``], minuts)} и ${seconds}&nbsp;${normalizeTextForNum(`секунд`, [`у`, `ы`, ``], seconds)}
          <br />вы&nbsp;набрали ${scores} ${scoresText} (${fastAnswers} ${fastAnswersText})
          <br />совершив ${mistakes} ${normalizeTextForNum(`ошиб`, [`ку`, `ки`, `ок`], mistakes)}
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
