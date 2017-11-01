export default (lives) => {
  return new Array(lives)
    .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
    .join(``);
};
