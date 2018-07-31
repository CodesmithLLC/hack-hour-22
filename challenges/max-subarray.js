/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

  let maxSum = -Infinity;

  // go over the array in a forEach.
  // have a nested reduce inside the forEach... and then in the acc, store the maxSum

  // brute force
  // check if the individual element is higher

  // store the result in an array
  let newArr = Object.assign(arr);
  let sumOfSubSetArrays = [];
  
  arr.forEach(e =>{
    //   console.log(e)
    if (maxSum < e){
        maxSum = e;
    }
  })

  sumOfSubSetArrays.push(maxSum);

  newArr.forEach((outside_e, outside_i ) => {
    
    let newSum = 0

    newArr.reduce((acc, curr, curr_i) => {
    
        //   console.log(outside_e, curr, outside_i, "~~", curr_i);
          if (outside_i <= curr_i ){
              console.log(curr);
              newSum+=curr;
              console.log(newSum, "NEWsum")
              sumOfSubSetArrays.push(newSum);
          }



          return curr;

    }, 0)


  });
  console.log(sumOfSubSetArrays);
  return Math.max(...sumOfSubSetArrays)

}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
module.exports = maxSubarray;
