/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2, result = []) {

    if (arr2.length === 0){
        return result.concat(arr1); 
    } else if (arr1.length ===0) {
        return result.concat(arr2)
    }



    result.push(arr1[0]);
    
    arr1.shift();
    return mergeArrays(arr2, arr1, result)

}
var arr1 = [3,4,6,10,11,15,21];
var arr2 = [1,5,8,12,14,19];
console.log(mergeArrays(arr1, arr2))
module.exports = mergeArrays;


    // let result = [];
    // let iOf1 = 0;
    // let iOf2 = 0;
    // console.log(arr1.length-1, arr2.length-1)
    // while (arr1.length > iOf1 || arr2.length > iOf2){
    //     if (arr1[iOf1] != undefined)
    //     console.log(arr1[iOf1], arr2[iOf2])
    //     iOf1 +=1;
    //     iOf2 +=1;
    // }
