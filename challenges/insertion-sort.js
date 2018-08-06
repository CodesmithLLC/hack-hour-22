// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
// iterate over the array;
let holder = 0;
  array.forEach((el, idx) => {
    // console.log the values before the current idx
    // console.log('head', el, idx)
    
    for (let x = idx; x >= 0; x--){

        // excludes the first one, since it is undefined
        if ( array[x-1]){
            // we iterate over the previous elements of the array that we have passed
            if (el < array[x-1] ) {
                holder = el;
                array[x] = parseInt(JSON.stringify(array[x-1]));
                array[x-1] = parseInt(JSON.stringify(holder));
            }             

        }

    }
      
  });
  return array;
}
module.exports = insertionSort;