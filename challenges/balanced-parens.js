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

    // sanitize 
    let sanitizedTxt = input.replace(/;/g, "");
    sanitizedTxt = sanitizedTxt.replace(/\w/g, "")
    sanitizedTxt = sanitizedTxt.replace(/'/g, "")
    sanitizedTxt = sanitizedTxt.replace(/=/g, "")
    sanitizedTxt = sanitizedTxt.replace(/\:/g, "");
    sanitizedTxt = sanitizedTxt.replace(/\./g, "");


    if (sanitizedTxt.length % 2 !== 0) return false;
    let status = "status";
    const array = sanitizedTxt.split('');
    // let cache = { key0: {char: '{', status: 'open'} };

    let cache = { key0: {char: '{', status: 'open'} };
    console.log(cache.key0, cache.key0.char,  cache.key0.status)

    // if second group closed first, return false
    // get first char, put in cache
    // get second char
    // see if second char closes char,  remove from cache
       // if second char doesn't close first char, put in cache

    // always check if 2ndchar is closed

    for (let i = 0; i < array.length; i++){

        if (i >  Object.keys(cache).length ) {
            if (cache['key'+i-1] === 'closed' &&  cache.key0.status === 'open')
            return false;
        } 
    }

    
}

// let result = balancedParens(' var hubble = function() { telescopes.awesome();')
let result = balancedParens('[(]{)}'); // false
// let result =  balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true

console.log(result)
// module.exports = balancedParens;
