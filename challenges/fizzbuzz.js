// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    // working solution using for loop //
    const returnArray = [];
    let tempValueString;

    for ( let i = 1; i < num + 1; i++ ) {
        if ( i % 3 === 0 ) {
            tempValueString += "fizz";
        }
        else if ( i % 5 === 0 ) {
            tempValueString += "buzz";
        }
        else {
            tempValueString += i;
        }
        returnArray.push(tempValueString);
        tempValueString = "";
    }
    return returnArray;
    

    // working solution using array.map //

    // let array1 = [];
    // for(var i=1;i<=num;i++){ array1.push(i); }
    // array1 = array1.map( function (x) {
    //     tempValueString = "";
    //     if ( x % 3 === 0 ) {
    //         tempValueString += "fizz";
    //     }
    //     else if ( x % 5 === 0 ) {
    //         tempValueString += "buzz";
    //     }
    //     else {
    //         tempValueString += x;
    //     }
    //     return tempValueString;
    // });
    // return array1;
}

module.exports = fizzbuzz;
