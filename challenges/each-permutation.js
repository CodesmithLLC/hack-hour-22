/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

// function eachPermutation(arr, callback) {

//   var path = [];
//   var indexesUsed = [];

//   permUtil(0);
//   function permUtil(pathIndex) {
//     if (pathIndex === arr.length) {
//       console.log(path)
//       return callback(path);
//     }
//     for (var i = 0; i < arr.length; i++) {
//       if (!indexesUsed[i]) {  // only if this element hasn't been used yet
//         indexesUsed[i] = true;
//         path[pathIndex] = arr[i];
//         permUtil(pathIndex + 1);
//         indexesUsed[i] = false;
//       }
//     }
//   }
//   return path;
// }

function eachPermutation(arr, callback) {
  const indexesUsed = [];
  const path = [];
  function inner(index) {
    if (index === arr.length) return callback(path);
    for (let i = 0; i < arr.length; i += 1) {
      if (!indexesUsed[i]) {
        indexesUsed[i] = true;
        path[index] = arr[i];
        inner(index + 1);
        indexesUsed[i] = false;
      }
    };
  }
  return inner(0);
}

console.log(eachPermutation([1, 2, 3], (perm) => { console.log('adam', perm) }));


module.exports = eachPermutation;
