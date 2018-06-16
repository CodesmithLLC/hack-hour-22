/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  let doubledString = s1.concat(s1);
  console.log(doubledString);
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  
  if (s1.length !== s2.length) {return false};
  // check if char of s2 is equals to the s1's index, index+1 or index-1

  for (let i = 0; i < s1.length; i++ ) {
    let charAtIdx = s1[i];
    let charAfter, charBefore;

    if (i === s1.length -1) {
      charAfter = s1[0];
    }
    else {
      charAfter = s1[i + 1];
    }
    if (i === 0) {
      charBefore = s1[s1.length -1];
    }
    else {
      charBefore = s1[i - 1];
    }
    console.log(s2[i], "=", charAtIdx, charAfter, charBefore)

    if (s2[i] === charAfter || s2[i] === charBefore || s2[i] === charAtIdx  ) {
    }
    else {
      return false
    }
  }

  
  
  return true;
}
console.log(stringRotation("hello", "ohell"));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
