const axios = require("axios");
const { Genre } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

const getGenres = async () => {
  const genres = await Genre.findAll();
  if (!genres.length) {
    let data = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    data = data.data.results;

    data.forEach((genre) => Genre.create({ name: genre.name, id: genre.id }));
    const genresFromApi = data.map((genre) => {
      return { name: genre.name, games: genre.games, id: genre.id };
    });
    return genresFromApi;
  } else {
    return genres;
  }
};

module.exports = getGenres;
