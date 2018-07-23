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
    // n = number of lines 
    // each line starts at one and increments
    // add '/n' and '/t' at the end of the new line
    let asterisks = '*'
    let space = ' ';
    let ask = '*';
    for (let i = n; i >= 0; i--) {
        console.log(space + asterisks + '\n');
        asterisks += ask;
    }
}

console.log(drawStairs(10));


module.exports = drawStairs;
