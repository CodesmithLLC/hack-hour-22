// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    let words = {};
    let stack = [];
    let sanitizedStr = str.toLowerCase().split(/\W|_/g);
    // console.log(sanitizedStr);

    for (let i = 0; i < sanitizedStr.length; i++){
        let reversed = sanitizedStr[i].split('').reverse('').join('');
        let normal = sanitizedStr[i];
        if (normal) {
            console.log(reversed, normal)
            if (!(normal in words) && (reversed in words) ) {
                stack.push(sanitizedStr[i]) 
                words[normal] = reversed;
            }
            else if (normal.split('').reverse('').join('') in words ) {
                if (words[stack.pop()] !== reversed){
                    return false;
                  }
            }
             
        }
    }
    console.log(stack, words); // sanitizedStr, 
    return true;
}

console.log( matchWord('__END_DNE-----'))
console.log( matchWord('IF()()fi[]'))
console.log( matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
module.exports = matchWord;
