const mistake = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;
export default (lives) => {
  return new Array(lives).fill(mistake).join(``);
};
