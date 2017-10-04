import {parseScreenFromTemplate, switchScreen} from '../../helpers/index';
//import welcomeScreen from '../screen-welcome/index';

const screenTemplate = `
  <section id="fail-timeout" class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br />Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`;

const failTimeoutScreen = parseScreenFromTemplate(screenTemplate);

//failTimeoutScreen.addEventListener(`click`, switchScreen(`main-replay`, failTimeoutScreen, welcomeScreen));

export default failTimeoutScreen;
