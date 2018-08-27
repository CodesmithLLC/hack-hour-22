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

const prepend = el => arr => [el, ...arr];

Array.prototype.without = function without(i) {
  return [...this.slice(0, i), ...this.slice(i + 1)];
};

function allPerms(arr) {
  if (arr.length === 1) return [arr];
  const out = [];
  arr.forEach((val, idx) => {
    const perms = allPerms(arr.without(idx));
    const grouped = perms.map(prepend(val));
    out.push(...grouped);
  });
  return out;
}

function eachPermutation(arr, callback) {
  allPerms(arr).forEach(callback);
}

module.exports = eachPermutation;
