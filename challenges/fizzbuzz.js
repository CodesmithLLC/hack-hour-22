// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3,
//     "buzz" in place of numbers divisble by 5,
// and  "fizzbuzz" in place of numbers divisble by both 3 and 5
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
  const result = [];
  let word = '';

  let copyInput = parseInt(num);


  if (typeof copyInput === 'string') {
    copyInput = parseInt(copyInput);
    // converts numbers in quotes
    // console.log("converted")
  }
  console.log(typeof copyInput);
  if (isNaN(copyInput) || typeof copyInput === 'object') {
    console.log('The input of the function is not a number.');
    return;
  }


  //     "fizz" if divisble by 3,
  //     "buzz" if  divisble by 5,
  //     "fizzbuzz" if divisble by both 3 and 5
  for (let x = 1; x < copyInput + 1; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      word = 'fizzbuzz';
    }
    else if (x % 3 === 0) {
      word = 'fizz';
    }
    else if (x % 5 === 0 ) {
      word = 'buzz';
    }
    else {
      word = x;
    }

    result.push(word);
    // console.log( x, ":", word, result)
  }
  return result;


}

console.log(fizzbuzz(['-']));
module.exports = fizzbuzz;
