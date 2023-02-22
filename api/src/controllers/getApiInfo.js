const axios = require("axios");
const cleanArray = require("../utils/cleanArray");
require("dotenv").config();
const { API_KEY } = process.env;

const getApiInfo = async (name) => {
  if (!name) {
    const pageOne = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=50`
    );
    const resultsPage1 = pageOne.data.results;
    let nextPage = pageOne.data.next;

    const pageTwo = await axios.get(nextPage);
    const resultsPage2 = pageTwo.data.results;
    nextPage = pageTwo.data.next;

    const pageThree = await axios.get(nextPage);
    const resultsPage3 = pageThree.data.results;
    nextPage = pageThree.data.next;

    const pageFour = await axios.get(nextPage);
    const resultsPage4 = pageFour.data.results;

    let results = [
      ...resultsPage1,
      ...resultsPage2,
      ...resultsPage3,
      ...resultsPage4,
    ];
    results = cleanArray(results);
    return results;
  }

  let resultsByName = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`
  );

  resultsByName = resultsByName.data.results;
  resultsByName = cleanArray(resultsByName);

  return resultsByName;
};

module.exports = getApiInfo;
