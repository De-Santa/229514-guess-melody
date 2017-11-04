const URL = `https://es.dump.academy/guess-melody`;
const QUESTIONS_ENDPOINT = `questions`;
const STATS_ENDPOINT = `stats/229514`;

class Loader {
  static async loadQuestions() {
    const response = await fetch(`${URL}/${QUESTIONS_ENDPOINT}`);
    return response.json();
  }

  static async loadStats() {
    const response = await fetch(`${URL}/${STATS_ENDPOINT}`);
    return response.json();
  }

  static async saveStats(data) {
    const response = await fetch(`${URL}/${STATS_ENDPOINT}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    });
    return response;
  }

}

export default Loader;
