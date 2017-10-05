import {parseScreenFromTemplate, renderScreen} from '../../helpers/index';
import failMistakesScreen from '../screen-fail-mistakes/index';
import failTimeoutScreen from '../screen-fail-timeout/index';
import successScreen from '../screen-success/index';

const screenTemplate = `
  <section id="game-genre" class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49" />
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49" />
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49" />
    </div>

    <div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1" />
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2" />
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3" />
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4" />
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>
`;

const gameGenreScreen = parseScreenFromTemplate(screenTemplate);

const submitAnswerButton = gameGenreScreen.querySelector(`.genre-answer-send`);
submitAnswerButton.disabled = true;

const answerCheckboxes = [...gameGenreScreen.querySelectorAll(`input[name="answer"]`)];

answerCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener(`change`, () => {
    submitAnswerButton.disabled = !answerCheckboxes.some((answer) => answer.checked);
  });
});

const nextScreenPool = [failMistakesScreen, failTimeoutScreen, successScreen];
const nextRandomScreen = nextScreenPool[Math.floor(Math.random() * nextScreenPool.length)];

gameGenreScreen.addEventListener(`click`, (event)=>{
  if (event.target === submitAnswerButton && !submitAnswerButton.disabled) {
    event.preventDefault();
    renderScreen(nextRandomScreen);
  }
});

export default gameGenreScreen;
