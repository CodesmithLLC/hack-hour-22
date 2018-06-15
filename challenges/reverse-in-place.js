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
    for ( let i = 0; i < Math.floor(array.length / 2); i++ ) {
        swapSpotsInArray( array, i, array.length - 1 - i );
    }
    return array;
}

function swapSpotsInArray( array, spot1, spot2 ) {
    let tempVal = array[spot1];
    array[spot1] = array[spot2];
    array[spot2] = tempVal;
}

let arr = [1,2,3,4];
console.log(reverseInPlace(arr));
console.log("end");
module.exports = reverseInPlace;
