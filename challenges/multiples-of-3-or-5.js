  'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const naturalSum = n => (n * (n + 1) / 2);
  const n3 = Math.floor(999 / 3);
  const n5 = Math.floor(999 / 5);
  const n15 = Math.floor(999 / 15);
  return 3 * naturalSum(n3) + 5 * naturalSum(n5) - 15 * naturalSum(n15);
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  // formmula for the sum of the natural numbers from 1...n
  const naturalSum = n => ((n * (n + 1)) / 2);
  const maxZ = z - 1;
  // how many multiples of x will be less than z? 
  const nx = Math.floor(maxZ / x);
  // mow many multiples of y will be less than maxZ?
  const ny = Math.floor(maxZ / y);
  // intersection of the two sume will need to be subtracted
  const nxy = Math.floor(maxZ / (x * y));
  // use scalar multiple properties of summation to return the sum of the sums,
  // but also use inclusion exclusion principle to remove the intersection of the two sums
  return (x * naturalSum(nx)) + (y * naturalSum(ny)) - ((x * y) * naturalSum(nxy));
}

console.log(sumMultiples3Or5Below1000());
const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;

