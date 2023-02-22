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
    genreId, //Es un array con cada uno de los id de generos
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
      created: true,
    };
    const game = await Videogame.create(newVideogame);
    genreId.forEach(async (id) => await game.addGenre(id));
    return newVideogame;
  }
  throw Error(
    "Debe ingresar todos los parametros necesarios para crear un juego"
  );
};

module.exports = postVideogame;
