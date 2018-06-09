/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let arr = array;
    let obj = arr.reduce((acc, curr) => {
            acc[curr] ? acc[curr]++ : acc[curr] = 1;
            return acc;
        }, {});
    let avg = arr.reduce((acc, curr) => {
        acc = Math.floor( (acc + curr) / array.length);
        return acc; 
    })
   let mode = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
return avg = mode ? true : false;

}

console.log('function', modemean([1, 2, 4, 5, 4, 4, 5, 7, 7, 8, 50]));

module.exports = modemean;
