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
  arr = str.split(/[^A-Za-z]+/).filter(x => x.length > 0)
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr.includes(arr[i].split('').reverse().join(''))) {
      arr.pop();
      arr.splice(arr.indexOf(arr[i].split('').reverse().join('')), 1);
    }
  }
  return  arr.length, arr;
}
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));


module.exports = matchWord;
