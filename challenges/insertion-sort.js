// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(arr) {
  const array = arr;
  if (array.length < 2) return array;
  for (let i = 1; i < array.length; i += 1) {
    const currVal = array[i];
    let j = i;
    while ((currVal < array[j - 1]) && j > 0) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = currVal;
  }
  return array;
}

module.exports = insertionSort;