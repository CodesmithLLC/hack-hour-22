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
  const binArr = binary.split('').reverse();
  let result = 0;
  let power = 1;

  for(let i = binary.length; i > 0; i--) {
    if (result === '1') {
      result += parseInt(binary[i], 10) * power;
      power *= 2
    }
  }
  return result;
}

// could not get solution working, need to look over and work through again.

module.exports = binToDec;
