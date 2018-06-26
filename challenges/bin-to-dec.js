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
 * Write a function that converts a decimal number to binary (then maybe hexadecimal);
 *
 * Take modulo of given binary number with 10.
    (1011 % 10 = 1)
  Multiply rem with 2 raised to the power
    it's position from right end.
    (1 * 2^0)
    Note that we start counting position with 0.
  Add result with previously generated result.
    decimal = decimal + (1 * 2^0)
  Update binary number by dividing it by 10.
    (1011 / 10 = 101)
  Keep repeating upper steps till binary > 0.

Final Conversion -: (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0) = 11
 */

const binToDec = (binary) => {
  return binary.split('').reduce( (total, digit, i) => {
    return (digit === '1') ? total += Math.pow(2,binary.length - (i+1)) : total;
  }, 0)
}


function binToDec(binary) {
  let decimal = 0;
  if (binary < 0) { decimal = 0; };

  decimal = decimal % 2 + 10 * (binToDec(binary[0]));



  console.log(decimal);
  return decimal;
}

console.log(binToDec('11110000'));
module.exports = binToDec;
