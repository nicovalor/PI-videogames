const { Videogame } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getVideoGameInfo = async (id) => {
  if (id.length > 8) {
    const videoGameInfo = await Videogame.findByPk(id);
    return videoGameInfo;
  } else {
    const videoGameInfo = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    return videoGameInfo.data;
  }
};

module.exports = getVideoGameInfo;
