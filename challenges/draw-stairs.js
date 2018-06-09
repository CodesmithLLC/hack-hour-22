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

  if (typeof n === 'string') {
    copyInput = parseInt(n);
    // converts numbers in quotes
    // console.log("converted")
  }

  if (isNaN(n) || typeof n === 'object') {
    // console.log('The input of the function is not a number.');
    return;
  }


  let empty = '0';
  empty = empty.padStart(n - 1, '0');

  const width = n;
  let steps = '*';

  while (n) {
    console.log(empty.concat(steps));
    n--;
    // remove the last character of the empty var
    empty = empty.slice(0, -1);

    // increment steps with 1 character
    steps = steps.concat('*');
  }
}


// function drawStairs(n) {
//     let width = n;
//     let steps = "";
//     // let blocks =
//     for (let x = 0; x < n; x++) {
//         console.log(steps.padEnd(width, "*"))
//         steps = steps.concat(steps, " ")
//     }
//     return;
// }


drawStairs('{1:2}');

module.exports = drawStairs;
