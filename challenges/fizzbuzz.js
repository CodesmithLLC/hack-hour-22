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
  // create an empty array
  let arr = [];
  // loop over num while less than or equal
  for(let i = 1; i <= num; i++) {
    // push fizzbuzz into array if divisible by 3 or 5
    if(i % 15 === 0){
      arr.push('fizzbuzz');
    }
    // push 'fizz' if divisible by 3
    else if(i % 3 === 0) {
      arr.push('fizz');
    }
    // push 'buzz' if divisible by 5
    else if(i % 5 === 0) {
      arr.push('buzz');
    }
    // push the number
    else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = fizzbuzz;
