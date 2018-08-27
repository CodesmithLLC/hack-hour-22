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

function romanNumeral(n) {
  const numeralMap = [
    1000, 'M',
    900, 'CM',
    500, 'D',
    400, 'CD',
    100, 'C',
    90, 'XC',
    50, 'L',
    40, 'XL',
    10, 'X',
    9, 'IX',
    5, 'V',
    4, 'IV',
    1, 'I'
  ];

  if (n < 1) return 'nulla';
  // let value = '';
  const romanArray = [];
  for (let i = 0; i < numeralMap.length; i += 2) {
    while (n >= numeralMap[i]) {
      console.log(n);
      console.log(numeralMap[i + 1]);
      romanArray.push(numeralMap[i + 1]);
      // value += numeralMap[i + 1];
      n -= numeralMap[i];
    }
  }
  return romanArray.join('');
  // return value;
}

console.log(romanNumeral(78));



function romanNumeral(n) {
  var map = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
  ];

  var value = '';
  for (var idx = 0; n > 0 && idx < map.length; idx += 2) {
    while (n >= map[idx]) {
      value += map[idx + 1];
      n -= map[idx];
    }
  }
  return value;
}




function romanNumeral(n) {
  const romanObj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }

  const romanArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var romanStr = '';

  for (let i = 0; n; i++) {
    while (n >= romanArr[i]) {
      romanStr += romanObj[romanArr[i]];
      n -= romanArr[i];
    }
  }

  return romanStr;
}

module.exports = romanNumeral;
