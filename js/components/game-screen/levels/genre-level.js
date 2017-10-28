class GenreLevel {
  constructor(levelData) {
    this.levelData = levelData;
  }

  get template() {
    return `
      <div class="main-wrap">
        <h2 class="title">Выберите ${this.levelData.genre} треки</h2>
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
            <div class="player-wrapper">
              <div class="player">
                <audio>
                  <source src="${answer.audio}">
                </audio>
                <button class="player-control player-control--play"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>
            <input type="checkbox" name="answer" value="answer-${index + 1}" id="answer-${index + 1}" />
            <label class="genre-answer-check" for="answer-${index + 1}"></label>
          </div>
      `.trim();
    }).join(``);
  }

  handleLevelActions(gameScreen, onAnswer) {
    gameScreen.addEventListener(`change`, (event) => {
      if (event.target.name === `answer`) {
        const answerBtn = gameScreen.querySelector(`.genre-answer-send`);
        const answerCheckboxes = [...gameScreen.querySelectorAll(`input[name="answer"]`)];
        answerBtn.disabled = !answerCheckboxes.some((answer) => answer.checked);
        onAnswer(true, 1);
      }
    });

    gameScreen.addEventListener(`click`, (event) => {
      if (event.target.className === `genre-answer-send`) {
        onAnswer(true, 1);
        return false;
      }
    });
  }
}


const getGenreUserAnswer = () => {
  return false;
};

export default GenreLevel;
