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
  const nums = {};
  const reversedBin = binary
    .split("")
    .reverse()
    .join("");
  let total = 0;

  for (let i = 0; i < binary.length; i++) {
    nums[i] = Math.pow(2, i);
  }

  for (let i = 0; i < reversedBin.length; i++) {
    if (parseInt(reversedBin[i]) === 1) total += nums[i];
  }

  return total;
}

module.exports = binToDec;
