const _createAnswers = (answers) => {
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
};

const createGenreLevel = (levelData) => {
  return `
    <div class="main-wrap">
      <h2 class="title">Выберите ${levelData.genre} треки</h2>
      <form class="genre">

        ${_createAnswers(levelData.answers)}

        <button class="genre-answer-send" disabled>Ответить</button>
      </form>
    </div>
  `.trim();
};

const handleGenreAnswerBtn = (gameScreen) => {
  const answerBtn = gameScreen.querySelector(`.genre-answer-send`);
  const answerCheckboxes = [...gameScreen.querySelectorAll(`input[name="answer"]`)];
  answerCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener(`change`, () => {
      answerBtn.disabled = !answerCheckboxes.some((answer) => answer.checked);
    });
  });
}

const getGenreUserAnswer = () => {
  return false;
};

export {createGenreLevel, handleGenreAnswerBtn, getGenreUserAnswer};
