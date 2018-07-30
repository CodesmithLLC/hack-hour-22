'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const naturalSum = n => (n * (n + 1) / 2);
  let n3 = Math.floor(1000 / 3);
  let n5 = Math.floor(1000 / 5);
  return sum = 3 * naturalSum(n3) + 5 * naturalSum(n5);
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
// formmula for the sum of the natural numbers from 1...n
const naturalSum = n => (n * (n + 1) / 2);
// how many multiples of x will be less than z? 
const nx = Math.floor(z / x);
// mow many multiples of y will be less than z?
const ny = Math.floor(z / y);

const nxy = Math.floor(z / (x * y));
// use scalar multiple properties of summation to return the sum of the sums,
// but also use inclusion exclusion principle to remove the intersection of the two sums
return (x * naturalSum(nx)) + (y * naturalSum(ny)) - (nxy * naturalSum(nxy));
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
