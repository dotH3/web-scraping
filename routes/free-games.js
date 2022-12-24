const { Router } = require("express");
const { freeGamesGet } = require("../controllers/free-games");

const router = Router();

router.get('/',[],freeGamesGet)

module.exports = router