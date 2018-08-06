// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // insert(array, )
  }
}

function insert(array, target, insert) {
  let i = insert;
  while (i > target)
    swap(array, i - 1, i);
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

module.exports = insertionSort;
