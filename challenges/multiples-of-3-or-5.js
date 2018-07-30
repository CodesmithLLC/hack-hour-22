// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

function multipleSummation(multiple, count) {
  return multiple * ((count * (count + 1)) / 2);
}

function countUnder(multiple, max) {
  return Math.floor((max - 1) / multiple);
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const xCount = countUnder(x, z);
  const xSum = multipleSummation(x, xCount);
  const yCount = countUnder(y, z);
  const ySum = multipleSummation(y, yCount);

  const crossCount = countUnder(x * y, z);
  const crossSum = multipleSummation(x * y, crossCount);

  return (xSum + ySum) - crossSum;
}

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
