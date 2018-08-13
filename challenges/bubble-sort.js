// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  function swap(i) {
    const h = i - 1;
    if (array[h] > array[i]) {
      [array[h], array[i]] = [array[i], array[h]];
      return true;
    }
    return false;
  }
  
  let unsorted = true;
  
  while (unsorted) {
    unsorted = false;
    for (let i = 1; i < array.length; i++) {
      unsorted = unsorted || swap(i);
    }
  }
  
  return array;
}

// console.log(bubbleSort([5, 1, 4, 2, 8]));


module.exports = bubbleSort;
