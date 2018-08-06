/* eslint no-param-reassign: 0 */
// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

function insertionSort(array) {
  if (!Array.isArray(array) || array.length < 2) return array;

  for (let i = 1; i < array.length; i += 1) {
    for (let j = i; j >= 1 && array[j] < array[j - 1]; j -= 1) {
      swap(array, j, j - 1);
    }
  }

  return array;
}

module.exports = insertionSort;
