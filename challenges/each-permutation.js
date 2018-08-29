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

const eachPermutation = (arr) => {
  const result = [];

  const permutator = (arr, cache = []) => {
    // if array length is empty, all permutations have been done
    if (!arr.length) {
      result.push(cache);
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        let current = arr.slice();
        let next = curr.splice(i, 1);
        permutator(current.slice(), m.concat(next));
      }
    }
  }
  permutator(arr);
  return result;
}



module.exports = eachPermutation;





try {
    // Node.js code generating an Error.
} catch (error) {
    if (error.message === 'ERR_HTTP_INVALID_STATUS_CODE') {
        // Perform some logic.
    }
}
 
