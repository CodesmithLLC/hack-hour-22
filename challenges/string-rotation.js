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
  let s2start = s2.indexOf(s1[0]);
  let s2ordered = "";
  if (s2start != -1 && s1.length === s2.length) {
    for (let i = s2start; i < s2.length; i++) {
      s2ordered += s2.charAt(i);
    }
    for (let j = 0; j < s2start; j++) {
      s2ordered += s2.charAt(j);
    }
    console.log(s2ordered);
  }
  console.log(s2ordered);
  return isSubstring(s1, s2ordered === "" ? undefined : s2ordered);
}

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
