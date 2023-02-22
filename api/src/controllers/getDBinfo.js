const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");

const getDBdata = async (name) => {
  if (!name) {
    const results = Videogame.findAll({
      include: { model: Genre, attributes: ["name"] },
    });
    return results;
  }
  const resultsWithName = Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    },
  });
  return resultsWithName;
};

module.exports = getDBdata;
