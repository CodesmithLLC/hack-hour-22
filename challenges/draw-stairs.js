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
	for (let left = n -1, right = 1; left >= 0; left--, right++) {
		let tier = '';
		for (let whiteSpace = 0; whiteSpace < left; whiteSpace++) {
			tier += ' ';
		}
		for (let stair = 0; stair < right; stair++) {
			tier += '*';
		}
		console.log(tier);
	}
}


module.exports = drawStairs;