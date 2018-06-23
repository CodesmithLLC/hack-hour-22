/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 *   binToDec('0')   -> 0
 *   binToDec('11')  -> 3
 *   binToDec('100') -> 4
 *   binToDec('101') -> 5
 *   binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary, power = 0) {
  if (binary.length === 0) throw new Error('Need actual binary #');
  if (binary.length === 1) return (2 ** power) * binary;
  return (((2 ** power) * binary.slice(-1))
    + binToDec(binary.slice(0, -1), power + 1));
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function stringify(number) {
  return digits[number].toString();
}

function decToBase(number, base = 2) {
  if (number === 0) return '0';
  const digit = number % base;
  if (number - digit === 0) return stringify(digit);
  return decToBase((number - digit) / base, base) + stringify(digit);
}

module.exports = binToDec;

