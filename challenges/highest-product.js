/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    let numsOnly = [];

    array.forEach(e => {
        if (!isNaN(parseInt(e))){
            numsOnly.push(e)
        }
    });
    let highestNum =  - Infinity;
    let highestArr = [];

    for (let i = 0; i < 3; i++){
        // highestNum = Math.max(array);
        highestNum = numsOnly.reduce(function(a, b) {
            return Math.max(a, b);
        });
        console.log(highestArr)
        highestArr.push(highestNum);
        numsOnly.splice(numsOnly.indexOf(highestNum))
        console.log(numsOnly)
    }
    // array.forEach(e, i => {
    //     array.forEach(xe, xi => {
    //         if (i !== xi) {

    //         }
    //     });
    // });

    // return highestProd;
    console.log(highestArr)
    return highestArr[0]* highestArr[1]*  highestArr[2];

}

console.log(highestProduct([  9, 10, 100000, -1000000 ,100]));

module.exports = highestProduct;
