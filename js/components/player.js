export default (src) => {
  return `<div class="player-wrapper">
    <div class="player">
      <button class="player-control player-control--play" data-src=${src}></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>`;
};
