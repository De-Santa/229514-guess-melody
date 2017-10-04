import {parseScreenFromTemplate, switchScreen} from '../../helpers/index';
import gameArtistScreen from '../screen-game-artist/index';

const screenTemplate = `
  <section id="welcome" class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br />
      Ошибиться можно 3 раза.<br />
      Удачи!
    </p>
  </section>
`;

const welcomeScreen = parseScreenFromTemplate(screenTemplate);

welcomeScreen.addEventListener(`click`, switchScreen(`main-play`, welcomeScreen, gameArtistScreen));

export default welcomeScreen;
