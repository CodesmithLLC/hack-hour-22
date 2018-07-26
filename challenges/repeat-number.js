/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    const string = array.join('');
    // \b\w*(\w{2})\w*\1
    array = array.sort();
    for (let x = 0; x < array.length; x++){
        let check = array[x];
        if (array[x+1] === array[x]){
            return array[x]
        }
        
    }
    return;
}

console.log(repeatNumbers([1,2,9,3,4,5,6,7,8,9]));
module.exports = repeatNumbers;
