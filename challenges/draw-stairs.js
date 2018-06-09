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

function drawStairs(num) {
    let counter = 1;
    let n = num;
    let str = ""
    while(n > 1) {
      str += (" ".repeat(n-1) + "*".repeat(counter) + '\n')
      n--;
      counter++
    }
    console.log(str += "*".repeat(counter));
}


module.exports = drawStairs;
