const appContainer = document.getElementById(`app`);

const switchScreenView = (view) => {
  appContainer.replaceChild(view.screenElement, appContainer.children[0]);
};

export default switchScreenView;
