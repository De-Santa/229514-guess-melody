import BaseScreenView from '../../utils/view';


class SplashScreen extends BaseScreenView {
  get template() {
    return `<div>Идет загрузка...</div>`;
  }

  showError(errorMessage) {
    this.element.textContent = errorMessage;
  }
}


export default new SplashScreen();
