const { Router } = require("express");
const getGenres = require("../controllers/getGenres");

const genreRouter = Router();

genreRouter.get("/", async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = genreRouter;
