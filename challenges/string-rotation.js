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

function stringRotation2(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  return isSubstring(s1.repeat(2), s2);
}

function stringRotation(s1, s2) {
  const length = s1.length;
  if (length !== s2.length) return false;
  
  const first = s1[0];
  for (let i = 0; i < length; i++) {
    if (first === s2[i]) {
      let matchQ = true;
      for (let j = 1; j < length; j ++) {
        if (s1[j] !== s2[(i + j) % length]) {
          matchQ = false;
          break;
        }
      }
      
      if (matchQ) return true;
    }
  }
  
  return false;
}

/*
console.log('part 1');

console.log(stringRotation("hello", "hello"));
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("llohe", "hello"));
console.log(stringRotation("hello", "he"));
console.log(stringRotation("hello", "ollhe"));

console.log('part 2');

console.log(stringRotation2("hello", "hello"));
console.log(stringRotation2("hello", "llohe"));
console.log(stringRotation2("llohe", "hello"));
console.log(stringRotation2("hello", "he"));
console.log(stringRotation2("hello", "ollhe"));
*/

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
