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

function balancedParens(input) {
  // SOLUTION 1
  // const brackets = ['{', '}', '[', ']', '(', ')'];
  // const bracketsObj = { '{': '}', '[': ']', '(': ')' };
  // const containedBrackets = input.split('').filter(char => brackets.includes(char));
  // const { length } = containedBrackets;
  // if ((length % 2) > 0) return false;
  // while (containedBrackets.length > 1) {
  //   const elem = containedBrackets[0];
  //   if (bracketsObj[elem] === containedBrackets[1]) {
  //     containedBrackets.shift();
  //     containedBrackets.shift();
  //     break;
  //   } else if (bracketsObj[elem] === containedBrackets[length - 1]) {
  //     containedBrackets.shift();
  //     containedBrackets.pop();
  //     break;
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  // SOLUTION 2
  // const opening = ['{', '[', '('];
  // const closing = ['}', ']', ')'];
  // const bracketStack = [];

  // const inputArr = input.split('');
  // for (let index = 0; index < inputArr.length; index += 1) {
  //   const element = inputArr[index];
  //   const openingIndex = opening.indexOf(element);
  //   const closingIndex = closing.indexOf(element);
  //   if (openingIndex > -1) bracketStack.push(openingIndex);
  //   if ((closingIndex > -1) && (closingIndex !== bracketStack.pop())) return false;
  // }
  // return !(bracketStack.length > 0);

  // SOLUTION 3
  const bracketsObj = { '{': '}', '[': ']', '(': ')' };
  const bracketStack = [];

  const inputArr = input.split('');
  for (let index = 0; index < inputArr.length; index += 1) {
    const element = inputArr[index];
    const closingBracket = bracketsObj[element];
    if (closingBracket) bracketStack.push(closingBracket);
    if (element.match(/[}\])]/) && (element !== bracketStack.pop())) return false;
  }
  return !(bracketStack.length > 0);
}

module.exports = balancedParens;

// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[(]{)}'));
// console.log(balancedParens('[({})]'));
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
