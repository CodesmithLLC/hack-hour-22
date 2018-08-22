function allAnagrams (word) {
  if (word.length < 2) {
    return [word];
  } else {
    var allAnswers = [];
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      var shortwordArray = allAnagrams(shorterWord);
      for (var j = 0; j < shortwordArray.length; j++) {
        allAnswers.push(letter + shortwordArray[j]);
      }
    }
    return allAnswers;
  }
}


function anagrams(string) {
  var results = makeAnagrams("", string);
  var noRepeats = results.reduce(function(obj, val, i) {
    obj[val] = 0;
    return obj;
  }, {});
  return Object.keys(noRepeats);
}

function makeAnagrams(head, rest){
  var intermediate = [];
  if (rest.length === 0) {
    intermediate.push(head);
  }
  var prefix, suffix;
  for (var i = 0; i < rest.length; i++) {
    prefix = rest.slice(0, i);
    suffix = rest.slice(i+1);
    intermediate = intermediate.concat(makeAnagrams(head + rest.charAt(i), prefix + suffix));
  }
  return intermediate;
}


function anagrams(string) {
  var s_array = string.split('');
  return anagramRecursion(s_array);
}

function anagramRecursion(letters) {
  var len = letters.length;
  var results = [];
  var newResults = [];
  var newLetters = [];
  var firstLetter;

  if (len <= 1) {
    results.push(letters.join(''));
    return results;
  }

  for (var i = 0; i < len; i ++) {
    firstLetter = letters[i];

    // get all results for words from letters besides firstLetter
    newLetters = letters.slice(0, i).concat(letters.slice(i + 1));
    newResults = anagramRecursion(letters.slice(0,i).concat(letters.slice(i+1)));

    // add firstLetter to all of the new results
    newResults = newResults.map(function(str) {
      return firstLetter + str;
    });

    // add newResults to results
    results = results.concat(newResults);
  }
  return results;
}
