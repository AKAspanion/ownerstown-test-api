const { getLetters, checkHero, heroesList } = require("../utils/index");

exports.fetchHeroes = (code) => {
  return new Promise((resolve) => {
    const data = {
      heroes: heroesList(),
    };

    if (code) {
      const letterCode = getLetters(code);

      data.code = code;
      data.heroes = data.heroes.filter((hero) =>
        checkHero(hero, letterCode, code)
      );
    }
    resolve(data);
  });
};
