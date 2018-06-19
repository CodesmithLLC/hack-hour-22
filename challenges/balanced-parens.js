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
  const brackets = { '(': 'L', ')': 'R', '{': 'L', '}': 'R', '[': 'L', ']': 'R' };
  let stack = [];
  let parens = [];
  let direction = '';

  for (l in input) {
    if (Object.keys(brackets).includes(input[l])) {
      parens.push(input[l]);
    }
  }

  for (p in parens) {
    direction = brackets[parens[p]];
    if (direction === 'L') {
      stack.unshift(direction);
    } else if (direction === 'R') {
      stack.shift();
    }
  }
  return stack.length === 0;
}

module.exports = balancedParens;

// Test cases
/*
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
// Refactor to match nested parens of different types.
console.log(balancedParens('[(]{)}')); // false **

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
*/