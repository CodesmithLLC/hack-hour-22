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
<<<<<<< HEAD
    let string='*'
    let space= ' ';
    for (let i=1;i<=n+1;i++){
      var newString=string.repeat(i);
      if (i<n){
      var newSpace=space.repeat(n-i);
      
      console.log(newSpace+newString);
      }
      else {
        console.log(newString);
        }
      }
=======
    let stair = Array(n).fill(' '); // this gives me an empty array the size of N
    let step = '*';

    for (let i = 0; i < stair.length; i++) {
        stair.push(step);
        stair.shift();
        console.log(stair.join(''));
    }

    // return stair.join('');
>>>>>>> 04508565a58d75d0306e86cd3bf55174db2362ba
}


module.exports = drawStairs;
