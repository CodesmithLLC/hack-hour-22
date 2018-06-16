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
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  const firstLetter = s1[0];
  const index = s2.indexOf(firstLetter);
  const string1 = s2.substring(index);
  const string2 = s2.substring(0, index);
  const newString = string1 + string2;
  if (s1 === newString) {
    return true;
  }
  return false;
}

// console.log(isSubstring("h", "he"));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
