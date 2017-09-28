const START_SCREEN = 1;
const FINAL_SCREEN = 5;

const appContainer = document.querySelector(`.app`);
const screenTemplates = [...document.getElementById(`templates`).content.children];

let currentScreen;

const showTemplate = (templateNum = START_SCREEN) => {
  if (templateNum >= START_SCREEN && templateNum <= FINAL_SCREEN) {
    currentScreen = templateNum;
    appContainer.replaceChild(screenTemplates[--templateNum], appContainer.children[0]);
  }
};

document.addEventListener(`keydown`, (event) => {
  if (event.altKey && event.code === `ArrowLeft`) {
    showTemplate(currentScreen-- === START_SCREEN ? START_SCREEN : currentScreen--);
  } else if (event.altKey && event.code === `ArrowRight`) {
    showTemplate(currentScreen++ === FINAL_SCREEN ? FINAL_SCREEN : currentScreen++);
  }
});

showTemplate();
