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
  const output = [];

  for (let i = 1; i <= num; i++) {
    let str = '';
    if (i % 3 === false || (!(i % 3)) || i % 3 === 0) {
      str += 'fizz';
    }
    if (i % 5 === 0) {
      str += 'buzz';
    }
    output.push(str || i);

    // i % 15 === 0 ? output.push('fizzbuzz') :
    //  i % 5 === 0 ? output.push('buzz') :
    //   i % 3 === 0 ? output.push ('fizz') :
    //     output.push(i);

    //   if (i % 15 === 0) {
    //     output.push('fizzbuzz');
    //   }
    //   if (i % 5 === 0 ) {
    //     output.push('buzz');
    //   }
    //   if (i % 3 === 0) {
    //     output.push('fizz');
    //   }
    //   else {
    //     output.push(i);
    //   }
  }
  return output;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
