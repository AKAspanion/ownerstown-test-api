const express = require("express");
const router = express.Router();

const { getHero } = require("../controllers/heroes");

router.route("/").get(getHero);

module.exports = router;
