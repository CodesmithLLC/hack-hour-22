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

const numerals = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];

function romanNumeral(n) {
  const digits = n.toString().split('').map(x => parseInt(x));
  let results = '';
  
  digits.forEach((digit, i) => {
    const place = digits.length - 1 - i;
    
    if (digit <= 3)
      results += numerals[place][0].repeat(digit);
    else if (digit === 4)
      results += numerals[place][0] + numerals[place][1];
    else if (digit === 5)
      results += numerals[place][1];
    else if (digit <= 8)
      results += numerals[place][1] + numerals[place][0].repeat(digit - 5);
    else
      results += numerals[place][0] + numerals[place + 1][0];
  });
  
  return results;
}

// console.log(romanNumeral(392));
// console.log(romanNumeral(3945));


module.exports = romanNumeral;
