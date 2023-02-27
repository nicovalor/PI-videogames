const cleanArray = (arr) => {
  return arr.map((element) => {
    return {
      id: element.id,
      name: element.name,
      description: element.description,
      platforms: element.platforms.map((platform) => platform.platform.name),
      image: element.background_image,
      launchDate: element.released,
      rating: element.rating,
      genres: element.genres.map((genre) => genre.name),
    };
  });
};

module.exports = cleanArray;
