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


// mode is the most common number
// mean is the average


function modemean(array) {

    let returnAverageVal;
    let returnModeVal;

    returnAverageVal = (function () {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return Math.floor(array.reduce(reducer) / array.length);
    })();

    returnModeVal = (function () {
        let objOfItems = {};
        let higherOfMatchModes = -1;
        let highestModeCount = -1;

        for ( let i = 0; i < array.length; i++ ) {
            if ( objOfItems[array[i]] === undefined ) {
                objOfItems[array[i]] = 1;
            }
            else {
                objOfItems[array[i]] = objOfItems[array[i]] + 1;
            }
        }
        for ( let key in objOfItems ) { 
            if ( objOfItems[key] >= highestModeCount ) {
                highestModeCount = objOfItems[key];
                if ( parseInt(key) > higherOfMatchModes ) higherOfMatchModes = parseInt(key);
            }
        }
        return higherOfMatchModes;
    })();

    console.log("mode: " + returnModeVal);
    console.log("mean: " + returnAverageVal);
    
    return (returnModeVal === returnAverageVal) ? true : false;

}

module.exports = modemean;

console.log("mode: " + modemean([1, 2, 2, 3, 3, 4, 5, 6]));

console.log("done");