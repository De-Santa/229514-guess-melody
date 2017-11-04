const appContainer = document.getElementById(`app`);

const switchScreenView = (view) => {
  appContainer.replaceChild(view.element, appContainer.children[0]);
};

export default switchScreenView;
