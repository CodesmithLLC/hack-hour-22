// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (array[i] < array[j]) {
          if (j === 0) {
            let temp = array.splice(i, 1);
            array.splice(0, 0, ...temp);
            break;  //use splice to insert item at 0
          }
          if (array[j - 1] <= array[i]) {
            let temp = array.splice(i, 1);
            array.splice(j, 0, ...temp);
            break;
          }
        }
      }
    }
    return array;
}

module.exports = insertionSort;
