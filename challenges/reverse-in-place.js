'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  let i = 0, j = array.length - 1;
  
  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
  }
  
  return array;
}

/*
const x = [1,2,3];
console.log(x);
console.log(x.reverse());
console.log(x);

const y = [1,2,3, 4];
console.log(y);
console.log(y.reverse());
console.log(y);
*/

module.exports = reverseInPlace;
