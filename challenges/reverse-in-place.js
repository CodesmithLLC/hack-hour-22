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
  let lastInd = array.length - 1;
  for (let index = 0; index < Math.ceil(array.length / 2); index += 1) {
    const temp = array[index];
    array[index] = array[lastInd];
    array[lastInd] = temp;
    lastInd -= 1;
  }
  return array;
}

module.exports = reverseInPlace;
