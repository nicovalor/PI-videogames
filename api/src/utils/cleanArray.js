const cleanArray = (arr) => {
  return arr.map((element) => {
    return {
      id: element.id,
      name: element.name,
      platforms: element.platforms.map((platform) => platform.platform.name),
      image: element.background_image,
      launchDate: element.released,
      rating: element.rating,
    };
  });
};

module.exports = cleanArray;
