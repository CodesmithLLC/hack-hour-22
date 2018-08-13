// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  const newArr = [...array];
  for (let i = 0; i < array.length; i += 1) {
    let value = newArr[i];
    let j = i - 1;
    console.log(j);
    while (j >= 0 && newArr[j] > value) {
      newArr[j + 1] = newArr[j];
      j--;
    }
    newArr[j + 1] = value;
  }
  return newArr;
}

console.log(insertionSort(unsortedArray));
module.exports = insertionSort;