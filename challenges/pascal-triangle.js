/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.
   https://en.wikipedia.org/wiki/Pascal%27s_triangle
   e.g.
  pascalTriangle(1):
  [[1]]
   pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]
   pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]
   pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/
 function pascalTriangle(numRows) {
   const arr = [];  
   for (let i = 0; i < numRows; i++) { 
     arr[i] = new Array(i+1);    
     for (let j = 0; j < i+1; j++) {            
       if (j === 0 || j === i) {
         arr[i][j] = 1;
       } else {
          arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
       }
     }
  }  
  return pascalTriangle; 
 }
 }
 module.exports = pascalTriangle;
