import BaseScreenView from '../../../utils/view';
import player from '../../../components/player';

const createAnswers = (answers) => {
  return answers.map((answer, index) => {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="${answer.artist}" />
        <label class="main-answer" for="${answer.artist}">
          <img class="main-answer-preview" src="${answer.image.url}" alt="${answer.title}" width="134" height="134" />
            ${answer.title}
         </label>
       </div>
    `.trim();
  }).join(``);
};

class ArtistLevel extends BaseScreenView {  
  constructor(levelData) {
    super();
    this.levelData = levelData;
  }

  get template() {
    return `
      <div class="main-wrap">
        <h2 class="title main-title">${this.levelData.question}</h2>
        ${player(this.levelData.src)}
        <form class="main-list">
        ${createAnswers(this.levelData.answers)}
        </form>
      </div>
    `.trim();
  }

  bind() {
    const answerButtons = [...this.element.querySelectorAll(`.main-answer`)];
    this.element.addEventListener(`click`, (event) => {
      if (event.target.className === `main-answer`) {
        const answerIndex = answerButtons.indexOf(event.target);
        this.onAnswer(this.levelData.answers[answerIndex].isCorrect);
      }
    });
  }

  onAnswer() {

  }
};

export default ArtistLevel;
