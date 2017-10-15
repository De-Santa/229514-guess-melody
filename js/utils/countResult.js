const countResult = ({globalScores, playerResult}) => {

  let message = ``;

  if (playerResult.livesLeft === 0) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    return message;
  } else if (playerResult.timeLeft === 0) {
    message = `Время вышло! Вы не успели отгадать все мелодии`;
    return message;
  }

  const updatedGlobalScores = [...globalScores, playerResult.score];

  updatedGlobalScores.sort((a, b) => {
    return a - b;
  });

  const currentPlayerIndex = updatedGlobalScores.indexOf(playerResult.score);
  const currentPlayerPlace = updatedGlobalScores.length - currentPlayerIndex;
  const defeatedPlayers = Math.round((currentPlayerIndex / updatedGlobalScores.length) * 100);

  message = `Вы заняли ${currentPlayerPlace}-е место из ${updatedGlobalScores.length} игроков. Это лучше чем у ${defeatedPlayers}% игроков.`;
  return message;
};

export default countResult;
