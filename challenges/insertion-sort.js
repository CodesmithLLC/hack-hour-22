// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < j; i++) {
      if (array[j] < array[i])
        insert(array, i, j);
    }
  }
  
  return array;
}

function insert(array, target, insert) {
  let i = insert;
  while (i > target) {
    swap(array, i - 1, i);
    i--;
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(insertionSort([-40, 20, 4, 2, -80, 1, 5, 3, 0]));
console.log(insertionSort([-40, 20, 4, 2, -80, 6, 1, 5, 3, 0]));


module.exports = insertionSort;
