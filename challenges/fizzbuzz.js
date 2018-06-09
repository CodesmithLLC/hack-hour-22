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
  let newArr = [];
  for (let i = 1; i <= num; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
      newArr.push("fizzbuzz");
    }else if (i % 3 === 0){
      newArr.push("fizz");
    }else if (i % 5 === 0){
      newArr.push("buzz");
    }else {newArr.push(i);}
  }
  return newArr;
}
||||||| merged common ancestors
function fizzbuzz(num) {
=======
function fizzbuzz(num) {  
>>>>>>> 4d093b1b3c0f86c5cfd7f5e098f474291392bf00

/*
// Alternate using switch statement
function fizzbuzz(num){
  let newArr = [];
  for (let i = 1; i <= num; i++){
    switch (true) {
      case i%3 === 0 && i%5 === 0:
        newArr.push("fizzbuzz");
        break;
      case i%3 === 0:
        newArr.push("fizz");
        break;
      case i%5 === 0:
        newArr.push("buzz");
        break;
      default:
        newArr.push(i);
    }
  }
  return newArr;
}
*/

module.exports = fizzbuzz;
