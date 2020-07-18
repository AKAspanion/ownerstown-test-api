exports.checkHero = (hero, code, number) => {
  const numberLength = String(number).length;
  const heroLength = hero.length;
  const codeLength = code.length;

  const mp = new Map();

  const isValid = (letterMap) => {
    let length = 0;
    letterMap.forEach(() => (length += 1));
    return !length && numberLength === heroLength;
  };

  for (let i = 0; i < heroLength; i++) {
    const item = mp.get(hero[i]);
    if (item) {
      mp.set(hero[i], item + 1);
    } else {
      mp.set(hero[i], 1);
    }
  }

  for (let i = 0; i < codeLength; i++) {
    const item = mp.get(code[i]);
    if (item) {
      if (item - 1 <= 0) {
        mp.delete(code[i]);
      } else {
        mp.set(code[i], item - 1);
      }
    }
  }

  if (isValid(mp)) {
    return true;
  }

  return false;
};

exports.getLetters = (number) => {
  let numbers = String(number).split("");

  const letterMap = {
    "2": "ABC",
    "3": "DEF",
    "4": "GHI",
    "5": "JKL",
    "6": "MNO",
    "7": "PQRS",
    "8": "TUV",
    "9": "WXYZ",
  };

  let letters = "";
  numbers.forEach((number) => {
    letters += letterMap[number];
  });
  return letters;
};

exports.heroesList = () => {
  return [
    "THOR",
    "HULK",
    "ROBIN",
    "FLASH",
    "BLADE",
    "BATMAN",
    "PHANTOM",
    "HELLBOY",
    "IRONMAN",
    "PUNISHER",
    "SUPERMAN",
    "SPIDERMAN",
    "BLACKWIDOW",
    "WOLVERINE",
    "GHOSTRIDER",
    "CAPTAINAMERICA",
  ];
};
