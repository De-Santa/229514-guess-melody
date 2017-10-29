import BaseScreenView from '../../utils/view';
import gameLevels from '../../data/game-levels';
import mistakes from '../mistakes';
import timer from '../timer';
import GenreLevel from './levels/genre-level';
import ArtistLevel from './levels/artist-level';

const LEVELS = {
  artist: ArtistLevel,
  genre: GenreLevel
};

class GameScreenView extends BaseScreenView {
  constructor(gameState) {
    super();
    this.gameState = gameState;
    this.levelData = gameLevels[gameState.currentLevel];
    const CurrentLevelConstructor = LEVELS[this.levelData.type];
    this.gameLevel = new CurrentLevelConstructor(this.levelData);
  }

  get template() {
    const {gameState} = this;
    const levelData = gameLevels[gameState.currentLevel];
    return `
      <section id="game-${levelData.type}" class="main main--level main--level-${levelData.type}">
        ${timer(gameState.time)}
        ${mistakes(gameState.mistakes)}
        ${this.gameLevel.template}
      </section>
    `.trim();
  }

  bind() {
    const gameScreen = this.element;
    this.gameLevel.handleLevelActions(gameScreen, this.onAnswer);
  }

  onAnswer() {}
}

export default GameScreenView;
