// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

const rev = str => str.split('').reverse().join('');

function matchWord(str) {
  const stack = [];
  const keywords = str
    .toLowerCase()
    .split(/[^a-z]+/) // what are the bounds of "space or punctuation"?
    .filter(string => string);

  for (let i = 0; i < keywords.length; i += 1) {
    if (stack[0] && keywords[i] === rev(stack.slice(-1)[0])) {
      stack.pop();
    } else {
      stack.push(keywords[i]);
    }
  }
  return stack.length === 0;
}

// matchWord('__END_DNE-----'); // -> true
// matchWord('__ENDDNE__'); // -> false       (not separated by a space)
// matchWord('IF()()fi[]'); // -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi'); // -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); // -> true
// matchWord(''); // -> true

module.exports = matchWord;
