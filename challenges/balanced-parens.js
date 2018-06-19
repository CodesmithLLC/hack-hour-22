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
    const testCases ={
      '[':']',
      '(':')',
        '{':'}',
        }
    const breakers =')]}'
    const array = input.split('');
    
    for (let e = 0; e<array.length; e++) {
      if (testCases[array[e]] && array[e+1]!== testCases[array[e]] && breakers.indexOf(array[e+1]) >= 0 ){
        return false;
        }
      }
    
    for (let i = 0; i<array.length; i++){
        if (testCases[array[i]]) {
        const index = array.indexOf(testCases[array[i]]);
        if (index===-1) return false;
        else {
            array.splice(index,1);
            array.splice(i,1);
            i = -1;
            }
        }
    }
     return true; 
}

module.exports = balancedParens;
