/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    let outputString = "";
    let outputArray = Array(n);
    outputArray.fill(" ");
    let starSpot = n - 1;


    for ( let h = 0; h < n; h++ ) {
        outputArray[starSpot] = "*";
        console.log(outputArray.join(''));
        starSpot--;
    }

    // for ( let j = n; j > -1; j-- ) {
    //     for ( let i = 0; i < n; i++ ) {
    //         if ( i < j ) {
    //             outputString += " ";
    //         }
    //         else {
    //             outputString += "*";
    //         }
    //     }
    //     console.log(outputString);
    //     outputString = "";
    // }
}
drawStairs(6)

module.exports = drawStairs;
