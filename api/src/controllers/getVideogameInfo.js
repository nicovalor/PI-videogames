const { Videogame } = require("../db");
const axios = require("axios");
const cleanVideogame = require("../utils/cleanVideogame");
require("dotenv").config();
const { API_KEY } = process.env;

const getVideoGameInfo = async (id) => {
  if (id.length > 10) {
    const videoGameInfo = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
      },
    });
    return videoGameInfo;
  } else {
    let videoGameInfo = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    videogameInfo = videoGameInfo.data;
    return cleanVideogame(videogameInfo);
  }
};

module.exports = getVideoGameInfo;
