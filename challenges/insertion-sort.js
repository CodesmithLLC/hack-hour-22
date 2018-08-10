// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (array[j] < array[j - 1] && j > 0) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[--j] = temp;
    }
  }
  return array;
}

module.exports = insertionSort;
