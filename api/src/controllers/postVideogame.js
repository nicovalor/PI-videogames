const { Videogame, Genre } = require("../db");

const postVideogame = async (body) => {
  const {
    name,
    description,
    platforms,
    image,
    launchDate,
    rating,
    genreId, //Es un array con cada uno de los id de generos
  } = body;
  if ((name, description, platforms, image, launchDate, rating, genreId)) {
    const newVideogame = {
      name,
      description,
      platforms,
      image,
      launchDate,
      rating,
      created: true,
    };

    const game = await Videogame.create(newVideogame);
    game.addGenres(genreId);

    return game;
  }
  throw Error(
    "Debe ingresar todos los parametros necesarios para crear un juego"
  );
};

module.exports = postVideogame;
