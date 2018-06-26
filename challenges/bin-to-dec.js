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
  let n = binary.length;
  console.log(n);
  let decimal = 0;
  binary = binary.split('');
  console.log(binary);

  function decimalRecursion(bin, dec) {
    if (n === 0) {
      return dec;
    }

    dec += bin[0] * Math.pow(2, n);
    console.log(dec)
    bin.slice(1);

    return decimalRecursion(dec, n - 1);
  }
  console.log(n);
  decimalRecursion(binary, decimal);
  return decimal;
}

module.exports = binToDec;

// console.log(binToDec('0')); // -> 0
console.log(binToDec('11')); // -> 3
// console.log(binToDec('100')); // -> 4
// console.log(binToDec('101')); // -> 5
// console.log(binToDec('0101')); // -> 5
