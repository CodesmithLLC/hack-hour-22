/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

const romanMap = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};
const subtractors = [1000, 100, 10, 1];
const modulos = Object.keys(romanMap).sort((a, b) => b - a);

function subtractorFor(modulo) {
  return subtractors.filter(val => val < modulo)[0];
}

function valueReducer(data, modulo) {
  const output = Object.assign({}, data);

  if (output.remainder >= modulo) {
    output.string += romanMap[modulo].repeat(Math.floor(output.remainder / modulo));
    output.remainder %= modulo;
  }

  if (output.remainder + subtractorFor(modulo) >= modulo) {
    const subtractor = subtractorFor(modulo);
    output.string += `${romanMap[subtractor]}${romanMap[modulo]}`;
    output.remainder -= (modulo - subtractor);
  }
  return output;
}

function romanNumeral(n) {
  const finalObject = modulos.reduce(valueReducer, { remainder: n, string: '' });
  return finalObject.string;
}

module.exports = romanNumeral;
