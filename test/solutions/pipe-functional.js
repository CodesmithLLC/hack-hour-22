// PART 1

const H = letter => letter ? `H${letter}` : 'H';

function H(letter) {
  if (letter) {
    return 'H' + letter;
  }
  return 'H';
}

// PART 2

// e
const e = letter => letter ? `e${letter}` : 'e';

function e(letter) {
  if (letter) {
    return 'e' + letter;
  }
  return 'e';
}

// l
const l = letter => letter ? `l${letter}` : 'l';

function l(letter) {
  if (letter) {
    return 'l' + letter;
  }
  return 'l';
}

// o
const o = letter => letter ? `o${letter}` : 'o';

function o(letter) {
  if (letter) {
    return 'o' + letter;
  }
  return 'o';
}

// PART 3

const pipe = (functions) => (startingValue) => functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), startingValue);

// In functional programming you would generally see that written as

const pipe = (functions) => (x) => functions.reduceRight((v, f) => f(v), x);

function pipe(functions) {
  return function (startingValue) {
    return functions.reduceRight(function (currentValue, currentFunction) {
      return currentFunction(currentValue);
    }, startingValue);
  };
}

// PART 4

const letterGenerator = letter => letters => letters ? `${letter}${letters}` : letter;

function letterGenerator(letter) {
  return function (letters) {
    if (letters) {
      return letter + letters;
    }
    return letter;
  };
}
