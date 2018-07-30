'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  sum += sumMultiplesXOrYBelowZ(3, 5, 1000);
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  sum += summation(x, z);
  sum += summation(y, z);
  sum -= summation(x * y, z);
  return sum;
}

function summation(n, limit) {
  limit = limit - 1;
  return n * Math.floor(limit / n) * (Math.floor(limit / n) + 1) / 2;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;

console.log(sumMultiples3Or5Below1000());
