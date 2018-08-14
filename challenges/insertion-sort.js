/* eslint-disable */

// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = i;
    while (current > 0 && array[current - 1] > array[current]) {
      let swap = array[current];
      array[current] = array[current - 1];
      array[current - 1] = swap;
    }
  }
}

module.exports = insertionSort;