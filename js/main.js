const SCREEN_ORDER = [
  `welcome`,
  `game-genre`,
  `game-artist`,
  `success`,
  `fail-timeout`,
  `fail-mistakes`
];
const TOTAL_SCREENS = SCREEN_ORDER.length;

const appContainer = document.querySelector(`.app`);

const rawTemplates = [...document.getElementById(`templates`).content.children];
const orderedTemplates = SCREEN_ORDER.map((screenID)=> {
  let orderedTemplate;
  for (let i = 0; i < rawTemplates.length; i++) {
    if (rawTemplates[i].id === screenID) {
      orderedTemplate = rawTemplates[i];
      break;
    }
  }
  return orderedTemplate;
});

let currentScreen;

const showTemplate = (templateNum = 0) => {
  currentScreen = (templateNum + TOTAL_SCREENS) % TOTAL_SCREENS;
  appContainer.replaceChild(orderedTemplates[currentScreen], appContainer.children[0]);
};

document.addEventListener(`keydown`, (event) => {
  if (event.altKey && event.code === `ArrowLeft`) {
    event.preventDefault();
    currentScreen--;
    showTemplate(currentScreen);
  } else if (event.altKey && event.code === `ArrowRight`) {
    event.preventDefault();
    currentScreen++;
    showTemplate(currentScreen);
  }
});

showTemplate();
