'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const a = Math.floor(999 / 3);
  const b = Math.floor(999 / 5);
  const c = Math.floor(999 / 15);
  
  return 3 * a * (a + 1) / 2 + 5 * b * (b + 1) / 2 - 15 * c * (c + 1) / 2;
}

// console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const xy = x * y, max = z - 1;
  
  const a = Math.floor(max / x);
  const b = Math.floor(max / y);
  const c = Math.floor(max / xy);
  
  return x * a * (a + 1) / 2 + y * b * (b + 1) / 2 - xy * c * (c + 1) / 2;
}

// console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
