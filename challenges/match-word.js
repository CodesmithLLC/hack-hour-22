// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", 
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards 
// counterpart. Words must be separated by space or punctuation.

function matchWord(str) {
  const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('');
  return cleanStr.join('') === cleanStr.reverse().join('');
}

module.exports = matchWord;

// Tests
// console.log(matchWord('__END_DNE-----')); // -> true
// console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 
// console.log(matchWord('')); // -> true
// console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
