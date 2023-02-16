const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require("./videogameRouter");
const genreRouter = require("./genreRouter");

const mainRouter = Router();

mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/genre", genreRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = mainRouter;
