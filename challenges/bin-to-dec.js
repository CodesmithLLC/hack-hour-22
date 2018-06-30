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
    let dec = 0;

    function f(n){
        dec += 2 ** (n.length-1);
        if (n.length === undefined){
            return dec;
        }
        return f(n-1);
    }

    
    f(binary);
}


console.log(binToDec('0')); //   -> 0
console.log(binToDec('11')); // -> 3
console.log(binToDec('100')); // -> 4
console.log(binToDec('101')); // -> 5
console.log(binToDec('0101')); // -> 5

module.exports = binToDec;



// let binToDec = (binary) => {
//     return binary.split('').reduce((total, digit, i) => {
//       return (digit === '1') ? total += Math.pow(2, binary.length - (i + 1)) : total;
//     }, 0);
//   }
