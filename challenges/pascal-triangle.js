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

  const resultArray = [];
  let arrayHolder;
  let prevArray;

  // create a loop while numRows is not 0; decrement each time
  do {

    if (resultArray.length === 0 ){
      arrayHolder = [1]
    }
    else if (resultArray.length === 1 ){
      arrayHolder = [1, 1]
    }
    else if (resultArray.length > 1 ){
      arrayHolder = [1];
      // do loop logic here that pushes the sum of adjacent elements to the middle of arrayHolder

      prevArray.forEach((e,i )=> {
        if (i !== prevArray.length -1) {
          console.log(prevArray[i], prevArray[i+1], " = ", prevArray[i] + prevArray[i+1])
          arrayHolder.push(parseInt(prevArray[i]) + parseInt(prevArray[i+1]));
        }
        
      });

      arrayHolder.push(1);

    }
    

    numRows -= 1;
    resultArray.push(arrayHolder);
    prevArray =JSON.parse(JSON.stringify(arrayHolder))

    // console.log(numRows,resultArray, "======", prevArray );


  } while (numRows)


  return resultArray;
}

console.log(pascalTriangle(6))
// EXPECTED:
// [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1]

// ]
module.exports = pascalTriangle;
