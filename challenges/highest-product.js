/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    let productArray = [];
    let compareArray = [];
    
    for (let i = 0; i < array.length; i++){
        compareArray = array.slice();
        compareArray.splice(i, 1);
    }
    console.log(compareArray, "<<<<");

    let sortedArr = array.sort(function(a, b){return a-b;});
   
    
    let n = sortedArr.length-1;

    return sortedArr[n]*sortedArr[n-1]*sortedArr[n-2];
}


module.exports = highestProduct;

console.log(highestProduct([1,2,5,4,3]));
console.log(highestProduct([1,2,-5,-4,3]));
console.log(highestProduct([-1,2,-5,-4,3]));
// console.log(highestProduct([]));


