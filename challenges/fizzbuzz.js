// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  const arr = [...Array(num).keys()]
  return arr.map(x => {
    const i = x + 1;
    if (i % 15 === 0) {
      return 'fizzbuzz';
    } else if (i % 3 === 0 || i % 5 === 0) {
      return i % 3 === 0 ? 'fizz' : 'buzz';
    } else {
      return i;
    }
  });
}

module.exports = fizzbuzz;
