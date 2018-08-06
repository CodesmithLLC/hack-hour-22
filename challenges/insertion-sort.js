// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = 0;

    while (j < i && array[i] > array[j]) {
      j++;
    }

    const temp = array[i];
    for (let k = i - 1; k >= j; k--) {
      array[k + 1] = array[k];
    }
    array[j] = temp;

  }

  return array;
}

module.exports = insertionSort;