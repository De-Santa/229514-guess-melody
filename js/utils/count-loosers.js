import countScores from './count-score';

const countLoosers = (playerResult, globalResults = []) => {
  const currentScores = countScores(playerResult.answers);

  const loosers = globalResults.filter((someResult) => {
    const scores = countScores(someResult.answers);
    return currentScores > scores || (currentScores === scores && someResult.time > playerResult.time);
  });

  return loosers.length;
};

export default countLoosers;
