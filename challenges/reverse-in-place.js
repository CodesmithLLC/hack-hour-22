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
    let arrayLength = array.length, j = 1;
    for (let i = 1; i < arrayLength; i++) {
        array.unshift(array[j]);
        j += 2;
    }
    return array.splice(0, arrayLength);
}

module.exports = reverseInPlace;

// console.log(reverseInPlace([1, 2, 3, 4, 5]));
// console.log(reverseInPlace([]));
// console.log(reverseInPlace([1, 2, 3, 4, 5, 6]));


// let reverseInPlace = (array) => {
//     let temp;
//     for (let i = 0, j = array.length - 1; i < j; i++ , j--) {
//         console.log(`element at index ${i} is ==>${array[i]}<== element at index ${j} is ==>${array[j]}<==`);
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         console.log(`new array ${array}`)
//     }
//     return array;
// }