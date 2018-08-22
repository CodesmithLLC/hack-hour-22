
function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for (let i = 0; i < z; i++) {
    if (i % x === 0 || i % y === 0) sum += i;
  }
  return sum;
}
