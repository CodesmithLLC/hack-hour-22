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
  return Array(n)
    .fill(null)
    .map((_, index) => ' '.repeat(n - (index + 1)) + '*'.repeat(index + 1))
    .join('\n');
}


module.exports = drawStairs;

