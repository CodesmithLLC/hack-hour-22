function fizzbuzz(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push('fizzbuzz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}
