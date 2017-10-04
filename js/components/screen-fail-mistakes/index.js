import {parseScreenFromTemplate, switchScreen} from '../../helpers/index';
//import welcomeScreen from '../screen-welcome/index';

const screenTemplate = `
  <section id='fail-mistakes' class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br />Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`;

const failMistakesScreen = parseScreenFromTemplate(screenTemplate);

//failMistakesScreen.addEventListener(`click`, switchScreen(`main-replay`, failMistakesScreen, welcomeScreen));

export default failMistakesScreen;
