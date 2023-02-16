const axios = require("axios");

const getVideogames = async (req, res) => {
  try {
    const { results } = await axios.get(
      "https://api.rawg.io/api/games?key=4378b8258138456ebea5aa33ea13ec67"
    );
    console.log(results);
    // res.status(200).json(results);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = getVideogames;
