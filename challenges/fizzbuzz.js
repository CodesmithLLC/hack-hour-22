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

<<<<<<< HEAD
function fizzbuzz(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
    if (i % 3 == 0) console.log('fizz');
    else if (i % 5 == 0) console.log('buzz');
    else if (i % 15 == 0) console.log('fizzbuzz');
    else console.log(i);
    arr.push(i);
    }
    return arr;
=======
function fizzbuzz(num) {  

>>>>>>> 4d093b1b3c0f86c5cfd7f5e098f474291392bf00
}

module.exports = fizzbuzz;
