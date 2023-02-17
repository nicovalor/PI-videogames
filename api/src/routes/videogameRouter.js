const { Router } = require("express");
// const getApiInfo = require("../utils/getApiInfo");
// const getDBdata = require("../utils/getDBinfo");
const getVideoGameInfo = require("../controllers/getVideogameInfo");
const joinData = require("../utils/joinApiDBdata");
const postVideogame = require("../controllers/postVideogame");

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
videogamesRouter.post("/", async (req, res) => {
  try {
    const newVideogame = await postVideogame(req.body);
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = videogamesRouter;
