const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");

const getDBdata = async (name) => {
  if (!name) {
    const results = Videogame.findAll();
    return results;
  }
  const resultsWithName = Videogame.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  return resultsWithName;
};

module.exports = getDBdata;
