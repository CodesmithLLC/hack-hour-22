function matchWord(str) {
  var keywords = str.match(/[a-zA-Z]+/g) || [];
  var wordStack = [];
  for (var word of keywords) {
    if (
      word.split('').reverse().join('').toLowerCase() === 
      (wordStack[0] || '').toLowerCase()
    )
      wordStack.shift();
    else
      wordStack.unshift(word);
  }
  return !wordStack.length;
}


// function matchWord(str) {
//   //edge case - if str is empty
//   if(str === '') return true;
//   //trim leading and ending non-alpha characters
//   str = str.replace(/^[^a-z]+/i, "");
//   str = str.replace(/[^a-z]+$/i, "");

//   //put all words into an array
//   //if there is only one word in the array, return false
//   var wordArray = str.match(/[a-z]+/ig);
//   if(wordArray.length < 2) return false;

//   //take first word and convert to lower case;
//   //take last word and reverse letters and convert to lower case
//   var firstWord = wordArray[0].toLowerCase();
//   var lastWordReversed = wordArray[wordArray.length-1].split('').reverse().join('').toLowerCase();
//   //return boolean value
//   return firstWord === lastWordReversed;
// }