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
    let star = '*';
    let spaces = ' ';
    let stair = new Array(n);
    for (var i = n; i >= 0; i--) {
        for (var j = n; j >= 0; j--) {
        if (i < n) {
            stair[i] = star;
        } else {
            stair[j] = spaces;
        }
        }
        console.log(stair.join(''));
    }
}


module.exports = drawStairs;
