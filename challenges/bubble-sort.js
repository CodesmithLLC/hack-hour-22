// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
   let swappedflag;

    do {
        swappedflag = false;
        for (let i = 0; i < array.length; i++) {
            // console.log(array[i] > array[i+1], array[i], array[i+1])
            if (array[i] > array[i+1]  ){
                const temp = array[i];
                array[i] = array[i+1];
                array[i + 1] = temp;
                swappedflag = true;               
            }
        }
        // console.log(array, swappedflag)
    } while (swappedflag); // flag becomes false if there is an element that is out of order
    return array;
}
console.log(bubbleSort([3, 4, 1, 2, 5, 0]));
module.exports = bubbleSort;
