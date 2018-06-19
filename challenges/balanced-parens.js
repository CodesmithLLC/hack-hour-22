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
  // create empty array for each char
  let brackets = [];
  let parens = [];
  let curlys = [];

  // loop over length of input
  for(let i = 0; i < input.length; i++) {
    if ((input[i] === ')' && parens.length === 0) || (input[i] === '}' && curlys.length === 0) || (input[i] === ']' && brackets.length === 0) ) {
      return false;
    }
    //if open char push in to proper array
    if (input[i] === '(' ) { parens.push('parens')}
    if (input[i] === '{' ) { curlys.push('curly')}
    if (input[i] === '[' ) { brackets.push('bracket')}
     // if closing shift in to array
    if ( input[i] === ')' ) { parens.shift('parens')}
    if ( input[i] === '}' ) { curlys.shift('curly')}
    if ( input[i] === ']' ) { brackets.shift('bracket')}
  }

  // conditional to check if input is balanced
  if ( parens.length === 0 && curlys.length === 0 && brackets.length === 0 ) {
    return true;
  } else { 
    return false;
  }
}

module.exports = balancedParens;

