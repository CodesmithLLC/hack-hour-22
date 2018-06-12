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
<<<<<<< HEAD

function fizzbuzz(num) {
	//fizz if divisible by 3
	//buzz if divisible by 5
	//fizzbuzz if divisible by 3 and 5
	let value=0;
	let newArr=[];
    while (value<num){
        value++;
        (value%3===0&&value%5===0)? newArr.push('fizbuzz'): //if value divisible by 3 and 5, automatically push fizzbuzz and do not check for other values
        ( value%5===0)? newArr.push('buzz') : //else check if value is divisible by 5 and push buzz
        (value%3===0) ? newArr.push('fizz'):  newArr.push(value);//else if divisible by 3 =>push fizz. If not divisible by 3 or 5, push value.
=======
function fizzbuzz(num) {
  const output = [];
>>>>>>> 04508565a58d75d0306e86cd3bf55174db2362ba
=======
function fizzbuzz(num) {  
>>>>>>> 4d093b1b3c0f86c5cfd7f5e098f474291392bf00

<<<<<<< HEAD
       /* if (value%3===0&&value%5===0) newArr.push('fizbuzz');  //I originally wrote the entire if statement operation in order to make sure my logic was correct
        else if ( value%5===0) {newArr.push('buzz');}
        else if (value%3===0) {newArr.push('fizz');}
        else newArr.push(value);
        */
    }
	return newArr;
	
	
=======
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
>>>>>>> 04508565a58d75d0306e86cd3bf55174db2362ba
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
