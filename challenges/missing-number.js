/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(array) {
  
  // get the index and element
  const combinedArray = Object.entries(array);
  console.log(combinedArray);

  
  // flatten array
  const newArray = combinedArray.reduce((acc, val) => 
  {
    val = [parseInt(val[0])+1, val[1]-1];
    console.log(val);
    // console.log(acc.concat(val))
    return acc.concat(val)
  }, []);
  
  console.log(newArray)
  // perform bitwise operation
  const result = newArray.reduce(function(a, b) {
    return a ^ b;
  });

  return result + 1;
}
// let A = [];
// A[0] = 2
// A[1] = 3
// A[2] = 1
// A[3] = 5


// let A = [];
// A[0] = 2
// A[1] = 3
// A[2] = 4
// A[3] = 5

console.log(missingNum(A))

module.exports = missingNum;