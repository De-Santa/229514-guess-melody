const appContainer = document.querySelector(`.app`);

const parseScreenFromTemplate = (string) => {
  const parser = new DOMParser();
  const result = parser.parseFromString(string, `text/html`);
  return result.body.firstElementChild;
};

const renderScreen = (element) => {
  appContainer.replaceChild(element, appContainer.children[0]);
};

const switchScreen = (handlerClassName, fromScreen, toScreen) => (event) => {
  if (event.target.className === handlerClassName) {
    event.preventDefault();
    renderScreen(toScreen);
  }
};

export {parseScreenFromTemplate, renderScreen, switchScreen};
