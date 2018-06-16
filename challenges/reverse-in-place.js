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


 if (stepNumber === 9 && calculateWinner(squares) === null) {
   'Game was a tie' + Restart game
 }

function reverseInPlace(array) {
  let temp;
  for (let i = 0, j = array.length - 1; i < j; i++ ) {
    temp = array[i];
    console.log(temp);
    array[i] = array[j];
    array[j] = temp;
    console.log(array[i]);

    const element = array[i];
    console.log(temp);
    j--;
  }
  return array;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseInPlace(testArray));

module.exports = reverseInPlace;
