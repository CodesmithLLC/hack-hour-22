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
  if (s1 === s2){
    return isSubstring(s1, s2);
  }else if (s1.length !== s2.length){
    return false;
  }
  let reverseS1 = "", j;

  for (let i = 0; i < s1.length; i++){
    for (j = 0; j< s2.length; j++){
      if (s1[i] === s2[j]){
        i = s1.length;
        break;
      }
    }
  }

  for (j; j< s2.length; j++){
    reverseS1 += s2[j];
  }

  let reverseStrLength = reverseS1.length;
  if (s1.length !== reverseS1.length){
    for (let i = 0; i < s1.length-reverseStrLength; i++){
      reverseS1+=s2[i];
    }
  }
  
  return isSubstring(s1, reverseS1);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

// console.log(stringRotation("hello", "hello"));
// console.log(stringRotation("hello", "llohe"));
// console.log(stringRotation("hello", "ollhe"));
// console.log(stringRotation("hello", "ollhe"));
// console.log(stringRotation("", ""));

