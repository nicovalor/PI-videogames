const cleanVideogame = (videogame) => {
  return {
    id: videogame.id,
    name: videogame.name,
    description: videogame.description,
    platforms: videogame.platforms.map((platform) => platform.platform.name),
    image: videogame.background_image,
    launchDate: videogame.released,
    rating: videogame.rating,
    genre: videogame.genres.map((genre) => genre.name),
  };
};
module.exports = cleanVideogame;
