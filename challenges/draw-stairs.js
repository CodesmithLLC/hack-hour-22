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
}


module.exports = drawStairs;
