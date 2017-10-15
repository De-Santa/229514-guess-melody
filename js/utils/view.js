import getScreen from './getScreen';

class BaseScreenView {

  get screenTemplate() {
    throw new Error(`You have to define screen template for view`);
  }

  screenRender() {
    return getScreen(this.screenTemplate);
  }

  setScreenEvents() {

  }

  get screenElement() {
    if (!this._screenElement) {
      this._screenElement = this.screenRender();
      this.setScreenEvents();
    }
    return this._screenElement;
  }
}

export default BaseScreenView;
