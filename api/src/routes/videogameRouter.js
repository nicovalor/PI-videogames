const { Router } = require("express");
const getApiInfo = require("../utils/getApiInfo");
const getDBdata = require("../utils/getDBinfo");
const getVideoGameInfo = require("../utils/getVideogameInfo");
const joinData = require("../utils/joinApiDBdata");

//defino el router para /videogames
const videogamesRouter = Router();

//get videogames
videogamesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const info = await joinData(name);
    res.status(200).send(info);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//get videogame by id
videogamesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videogameInfo = await getVideoGameInfo(id);
    res.status(200).json(videogameInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//post videogame on the db
videogamesRouter.post("/", (req, res) => {
  res.send("CREA UN VIDEOJUEGO Y LO RELACIONA CON AL MENOS UN GENERO");
});

module.exports = videogamesRouter;
