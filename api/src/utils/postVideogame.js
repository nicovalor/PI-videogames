const { Videogame, Genre } = require("../db");

const postVideogame = async (body) => {
  const {
    name,
    id,
    description,
    platforms,
    image,
    launchDate,
    rating,
    genreId,
  } = body;
  if ((name, id, description, platforms, image, launchDate, rating, genreId)) {
    const newVideogame = {
      name,
      id,
      description,
      platforms,
      image,
      launchDate,
      rating,
    };
    const game = await Videogame.create(newVideogame);
    await game.addGenre(genreId);
    return newVideogame;
  }
  throw Error(
    "Debe ingresar todos los parametros necesarios para crear un juego"
  );
};

module.exports = postVideogame;
