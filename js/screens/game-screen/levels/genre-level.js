import BaseScreenView from '../../../utils/view';
import player from '../../../components/player';

class GenreLevel extends BaseScreenView {
  constructor(levelData) {
    super();
    this.levelData = levelData;
  }

  get template() {
    return `
      <div class="main-wrap">    
        <h2 class="title">${this.levelData.question}</h2>
        <form class="genre">
          ${this._createAnswers(this.levelData.answers)}  
          <button class="genre-answer-send" disabled>Ответить</button>
        </form>
      </div>
    `.trim();
  }

  _createAnswers(answers) {
    return answers.map((answer, index) => {
      return `
        <div class="genre-answer">
          ${player(answer.src)}
          <input type="checkbox" name="answer" value="answer-${index + 1}" id="answer-${index + 1}" />
          <label class="genre-answer-check" for="answer-${index + 1}"></label>
        </div>
      `.trim();
    }).join(``);
  }

  bind() {
    const answerCheckboxes = [...this.element.querySelectorAll(`input[name="answer"]`)];
    const answerBtn = this.element.querySelector(`.genre-answer-send`);

    this.element.addEventListener(`change`, (event) => {
      if (event.target.getAttribute(`name`) === `answer`) {
        answerBtn.disabled = !answerCheckboxes.some((answer) => {
          return answer.checked;
        });
      }
    });

    this.element.addEventListener(`click`, (event) => {
      if (event.target.classList.contains(`genre-answer-send`)) {
        const answers = this.levelData.answers;
        const answerIsCorrect = answerCheckboxes.reduce((result, answerCheckbox, i) => {
          const isRequiredGenre = (answers[i].genre === this.levelData.genre);
          return result && answerCheckbox.checked === isRequiredGenre;
        }, true);
        this.onAnswer(answerIsCorrect);
        event.preventDefault();
      }
    });
  }

  onAnswer() {

  }
}

export default GenreLevel;
