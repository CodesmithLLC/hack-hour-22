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
  const wordsString = str.replace(/[^A-Za-z]+/g, ' ').toLowerCase().trim();
  const words = wordsString ? wordsString.split(' ') : [];
  
  const wordStack = [];
  for (const word of words) {
    const reversed = word.split('').reverse().join('');
    
    if (wordStack[wordStack.length - 1] === reversed)
      wordStack.pop();
    else
      wordStack.push(word);
  }
  
  return wordStack.length === 0;
}

// console.log(matchWord('__END_DNE-----')); // -> true
// console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
// console.log(matchWord('')); // -> true

module.exports = matchWord;
