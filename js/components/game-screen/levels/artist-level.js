const createAnswers = (answers) => {
  return answers.map((answer, index) => {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="${answer.artist}" />
        <label class="main-answer" for="${answer.artist}">
          <img class="main-answer-preview" src="${answer.image}" alt="${answer.artist}" width="134" height="134" />
            ${answer.artist}
         </label>
       </div>
    `.trim();
  }).join(``);
};

class ArtistLevel {
  constructor(levelData) {
    this.levelData = levelData;
  }

  get template() {
    return `
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio controls>
              <source src="${this.levelData.audio}">
            </audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${createAnswers(this.levelData.answers)}
        </form>
      </div>
    `.trim();
  }

  handleLevelActions(gameScreen, onAnswer) {
    const answerButtons = [...gameScreen.querySelectorAll(`.main-answer`)];
    gameScreen.addEventListener(`click`, (event) => {
      if (event.target.className === `main-answer`) {
        const answerIndex = answerButtons.indexOf(event.target);
        const time = 5;
        onAnswer({
          isCorrect: this.levelData.answers[answerIndex].correctAnswer,
          time
        });
      }
    });
  }
};

export default ArtistLevel;
