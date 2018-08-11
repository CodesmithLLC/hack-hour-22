// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - 1; j++) {
      if(array[j] > array[j+1]) {
        const smaller = array[j+1];
        array[j+1] = array[j];
        smaller = array[j];
      }
    }
  } 
  return smaller;
}

module.exports = bubbleSort;
