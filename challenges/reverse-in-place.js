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
  const lastIndex = array.length - 1;
  const validKeys = Object.keys(array)
    .filter(key => key.match(/^\d*$/))
    .map(val => parseInt(val));

  for (let i = 0; i < lastIndex / 2; i += 1) {
    const partnerIdx = lastIndex - i;
    const itemPresent = validKeys.includes(i);
    const partnerPresent = validKeys.includes(partnerIdx);

    const temp = array[partnerIdx];
    array[partnerIdx] = array[i];
    array[i] = temp;

    if (!itemPresent) delete array[partnerIdx];
    if (!partnerPresent) delete array[i];
  }

  return array;
}

module.exports = reverseInPlace;
