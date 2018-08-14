/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    const parensOnly = input.replace(/[^\[\]\(\)\{\}]/g, '')
    const curlyReplace = parensOnly.replace(/\}/g, '{');
    const bracketReplace = curlyReplace.replace(/\]/g, '[');
    const parensReplace = bracketReplace.replace(/\)/g, '(')
    const inputArr = parensReplace.split('');
    if (inputArr.length % 2 === 0) {
      if (inputArr[0] === inputArr[inputArr.length - 1]) {
        for (let i = 0; i < Math.floor(inputArr.length) / 2; i++) {
            return (inputArr[i] === inputArr[inputArr.length - 1]);
        }
      } else if (inputArr[0] === inputArr[1])
        for (let i = 0; i < Math.floor(inputArr.length); i +=2) {
            return (inputArr[i] === inputArr[i+1]);
        }
    }
  return false;
}

module.exports = balancedParens;
