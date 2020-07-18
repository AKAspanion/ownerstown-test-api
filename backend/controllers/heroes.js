const { getLetters, checkHero, heroesList } = require("../utils/index");

// @desc        Get hero
// @route       Get /api/v1/heroes
// @access      Public
exports.getHero = (request, response, next) => {
  const { code } = request.body;

  const letterCode = getLetters(code);

  const heroes = heroesList().filter((hero) =>
    checkHero(hero, letterCode, code)
  );

  const words = response.status(200).json({
    success: true,
    data: { code, heroes },
  });
};
