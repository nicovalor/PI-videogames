const { Router } = require("express");

const genreRouter = Router();

genreRouter.get("/", (req, res) => {
  res.send("OBTIENE LOS GENEROS DE LA API Y LOS GUARDA EN LA DB");
});

module.exports = genreRouter;
