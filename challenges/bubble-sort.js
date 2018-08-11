/* eslint no-param-reassign: 0 */
// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  let runAgain = true;
  while (runAgain) {
    runAgain = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        runAgain = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
