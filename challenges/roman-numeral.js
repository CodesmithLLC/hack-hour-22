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

const getNumeral = (num, boundary, letter, nearestValue, letterForNearestValue) => {
  const repeat = Math.floor(num / boundary);
  let romanStr = '';
  let n = num % boundary;

  if (repeat > 0) {
    romanStr = letter.repeat(repeat) + romanStr;
  }
  if (n >= nearestValue) {
    romanStr = `${letterForNearestValue}${romanStr}`;
    n -= nearestValue;
  }

  return romanNumeral(n, romanStr);
};

function romanNumeral(n, romanStr = '') {
  if (n === 0) {
    return romanStr;
  }

  switch (true) {
    case n >= 999:
      return romanStr + getNumeral(n, 1000, 'M', 900, 'CM');
    case (n >= 499):
      return romanStr + getNumeral(n, 500, 'D', 400, 'CD');
    case (n >= 99):
      return romanStr + getNumeral(n, 100, 'C', 90, 'XC');
    case n >= 49:
      return romanStr + getNumeral(n, 50, 'L', 40, 'XL');
    case n >= 9:
      return romanStr + getNumeral(n, 10, 'X', 9, 'IX');
    case n >= 4:
      return romanStr + getNumeral(n, 5, 'V', 4, 'IV');
    default:
      return romanStr + getNumeral(n, 1, 'I');
  }
}

module.exports = romanNumeral;

console.log(romanNumeral(8));
