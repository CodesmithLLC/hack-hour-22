/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    // recursively go over the array:
    // check if target is less than the middle
        // if target is less than the middle, 
    // slice the array 
    // if the target is at the 
    
    
    const middleVal = Math.round(arr.length/2)    
    console.log(arr, arr.length, middleVal);

    console.log(arr.length )
    if (arr.length == 2 ){ 
        if (target === arr[0] || target === arr[1]) {
            console.log(arr)
            return true;
        } 

    }

    if (target === arr[middleVal] ){ 
        return true;

    } else if (arr.length == 2 ){
        // console.log("here")
            if (target === arr[0] || target === arr[1]) {
                // console.log(arr)
                return true;
            } 
            return false;
    } 
    else if (target > arr[middleVal]) {
        // recursive case
        // console.log(arr.slice(middleVal , arr.length),  ">", arr[middleVal] );
        if (arr.length == 2 ){
            if (target === arr[0] || target === arr[1]) {
                // console.log(arr)
                return true;
            } 

        }
        return findInOrderedSet(arr.slice(middleVal, arr.length), target);

}
     else if (target <  arr[middleVal]) {
        // recursive case
        // console.log(arr.slice(0, middleVal ), "<", arr[middleVal]);
        if (target === arr[0] || target === arr[1]) {
            // console.log(arr)
            return true;
        } 

        return  findInOrderedSet(arr.slice(0, middleVal), target)



    }else{
        return false;
    }
}

// console.log(findInOrderedSet( [1, 4, 6, 7, 8, 9, 17, 45, 89], 0));

module.exports = findInOrderedSet;
