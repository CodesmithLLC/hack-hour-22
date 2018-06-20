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

module.exports = romanNumeral;
