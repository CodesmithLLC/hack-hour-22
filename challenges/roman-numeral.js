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
  const mainValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const secValues = [900, 400, 90, 40, 9, 4]
  const valueStrings = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M'
  }
  let remaining = n;
  let index = 0;
  let romanNumeralString = '';
  while (remaning > 0 && index < mainValues.length) {
    const current = mainValues[index]
    if (remaining < current) index += 1; // see if i can move that entirely to the end of the while loop

    if (remaining > current) {
      if (secValues.includes(current)) {
        remaining -= current;
        romanNumeralString += valueStrings[current];
      } else {
        const reps = Math.floor(remaining / current)
        remaining = remaining % current;
        if (current === 1000) {
          romanNumeralString += valueStrings[current].repeat(reps);
kk
      }
    }

  }
}

module.exports = romanNumeral;

