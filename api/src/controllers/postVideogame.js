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
    const genres = genreId.map((id) => {
      Genre.findAll({ where: { id: id } });
    });

    //ADD GENRES SE LED EBE PASAR LOS IDs
    genres.forEach(async (genre) => {
      await game.addGenres(genre);
    });

    genreId.forEach(async (id) => await game.addGenre(id));
    return game;
  }
  throw Error(
    "Debe ingresar todos los parametros necesarios para crear un juego"
  );
};

module.exports = postVideogame;
