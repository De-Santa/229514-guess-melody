const URL = `https://es.dump.academy/guess-melody/questions`;

class Loader {
  static async loadQuestions() {
    const response = await fetch(URL);
    return response.json();
  }

};

export default Loader;
