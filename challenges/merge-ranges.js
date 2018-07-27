/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    
    for (let outerI = array.length; outerI > 0; outerI-= 1){
        if (array[outerI]){
          for (let innerI = outerI -1; innerI > 0; innerI-= 1){
            console.log(array[outerI]);
            console.log(array[innerI]);
            if (array[innerI][0] > array[outerI][0] && array[innerI][0] <= array[outerI][1]){
              array[outerI] = [Math.min(array[outerI][0],array[innerI][0]), Math.max(array[innerI][1], array[outerI][1])]  
              array[innerI] = undefined;
            }
            else if (array[innerI][1] > array[outerI][0] && array[innerI][1] <= array[outerI][1]){
              array[outerI] = [Math.min(array[outerI][0],array[innerI][0]), Math.max(array[innerI][1], array[outerI][1])]  
              array[innerI] = undefined;
              }
        }
        }
    }
    const mergedTimes = array.filter((element) =>{
      if (element !== undefined) return element;
      });
      return mergedTimes;
}

module.exports = mergeRanges;
