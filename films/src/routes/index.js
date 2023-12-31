const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/films", controllers.getFilms);

router.post("/", middlewares.filmsValidation, controllers.createFilm);

module.exports = router;
