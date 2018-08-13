// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  //starting from 0, keep swapping larger to right until you reach end
  //then reduce tail by 1 because we've found largest number up to here
  for (let tail = array.length; tail > 0; tail--) {
    for (let i = 0; i < tail; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort([24, 66, 1, 3, 9, 5, 2]))
function findInOrderedSet(arr, target) {
  const output = false;
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
    if (arr[i] === target) return true;

    for (let index = 0; index < array.length; index+=1) {
      
    }
  }
  return output;
}
function uniqueNumber(array) {

  const newArr = array.sort((a, b) => a - b);

  return newArr.reduce((acc, curr, i) => {
    if (curr !== array[i + 1] && curr !== array[i - 1]) return curr;
    return acc;
  }, null)

}
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
for (let i = 0; i < array.length; i += 1) {
  while (j >= 0 && newArr[j] > value) {
    newArr[j + 1] = newArr[j];
    j--;
  }
  let productSoFar = 1;
  console.log(bubbleSort([24, 66, 1, 3, 9, 5, 2]))

  console.log(bubbleSort([24, 66, 1, 3, 9, 5, 2]))

  console.log(bubbleSort([24, 66, 1, 3, 9, 5, 2]))

module.exports = bubbleSort;


function findInOrderedSet(arr, target) {
  const output = false;
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
    if (arr[i] === target) return true;
  }
  return output;
}
function uniqueNumber(array) {

  const newArr = array.sort((a, b) => a - b);

  return newArr.reduce((acc, curr, i) => {
    if (curr !== array[i + 1] && curr !== array[i - 1]) return curr;
    return acc;
  }, null)

}
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
for (let i = 0; i < array.length; i += 1) {
  while (j >= 0 && newArr[j] > value) {
    newArr[j + 1] = newArr[j];
    j--;
  }
  let productSoFar = 1;