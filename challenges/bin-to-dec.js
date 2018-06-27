/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  /*
  1. split into an array. 
  2. convert each entry into an integer 
  3. initialize a sum 
  4. while array length is > 0
    5. if num is zero, shift and repeat
    6. if num is a one, add 2^(n-1) to the sum, shift, repeat
  7. return sum
  */

  const binArray = binary.split('');

  let decimalSum = 0;

  while (binArray.length > 0) {
    if (binArray[0] === '0') {
      binArray.shift();
    } else {
      decimalSum += 2 ** (binArray.length - 1);
      binArray.shift();
    }
  }
  return decimalSum;
}

const binToDec2 = binary => {
  return binary.split('').reduce((acc, char, index, array) => {
    if (char === '1') acc += 2 ** (array.length - 1 - index);
    return acc;
  }, 0);
}
console.log(binToDec('11000111001100'));
console.log(binToDec2('11000111001100'));


module.exports = binToDec;
