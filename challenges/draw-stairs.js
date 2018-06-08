// /* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
//  The staircase must climb up from left to right. The last line should only consist of asterisks,
//  without any leading/trailing spaces.

//  For example:     
//  drawStairs(6) ->          
//      *
//     **
//    ***
//   ****
//  *****
// ******

// */

function drawStairs(n) {
    let depth = 1;
    let result = '';
    while (depth <= n) {
        console.log('here');

        for (let i = depth; i < n; i += 1) {
            result += ' ';
        }
        for (let i = 0; i < depth; i += 1) {
            result += '*';
        }
        result += '\n';
        depth += 1;
    }
    return result;
}

module.exports = drawStairs;
