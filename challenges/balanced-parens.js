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

function balancedParens(input, index = 0){

    let startBracketQueue = [];

    const recurseBalParens = function (inputR, indexR) { 
        if ( indexR > inputR.length - 1 && startBracketQueue.length === 0 ) return true;
        else if ( indexR > inputR.length - 1 && startBracketQueue.length > 0 ) return false;

        if ( input[index] !== '(' && input[index] !== ')' ) return recurseBalParens(inputR, indexR + 1);
    
        if ( inputR[indexR] === '(' ) {
            startBracketQueue.push( '(' );
            return recurseBalParens(inputR, indexR + 1);
        }
    
        if ( inputR[indexR] === ')' && startBracketQueue.indexOf( '(' ) > -1 ) {
            startBracketQueue.pop();
            return recurseBalParens(inputR, indexR + 1);
        }
        else if ( inputR[indexR] === ')' && startBracketQueue.indexOf( '(' ) === -1 ) return false;    
    
        return true;

    }
    return recurseBalParens(input, index);

}

// console.log(balancedParens('('));
// console.log(balancedParens('()'));
// console.log(balancedParens(')('));
// console.log(balancedParens('())'));
console.log(balancedParens( '    yo: thisIsAwesome() )' ));
console.log("here");

module.exports = balancedParens;
