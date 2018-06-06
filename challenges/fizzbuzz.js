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

const fizzBuzzFilter = (num) => {
  const threeDivisor = num % 3 === 0 ? 'fizz' : '';
  const fiveDivisor = num % 5 === 0 ? 'buzz' : '';
  const stringOutput = threeDivisor + fiveDivisor;

  return stringOutput || num;
};

const fizzbuzz = max => Array(max)
  .fill(null)
  .map((_, idx) => fizzBuzzFilter(idx + 1));

module.exports = fizzbuzz;
