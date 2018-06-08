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
//version that uses for loop 
// function fizzbuzz(num) {
// 	let output = [];
// 	for (let i = 1; i <= num; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			output.push('fizzbuzz');
// 		} else if (i % 3 === 0) {
// 			output.push('fizz');
// 		} else if (i % 5 === 0) {
// 			output.push('buzz')
// 		} else {
// 			output.push(i);
// 		}
// 	}
// 	return output;
// }
=======
function fizzbuzz(num) {  
>>>>>>> 4d093b1b3c0f86c5cfd7f5e098f474291392bf00

//version that makes array and then mutates with map
// function fizzbuzz(num) {
// 	let output = [...Array(num + 1).keys()];
// 	output.shift();
// 	return output.map(el => {
// 		if (el % 3 === 0 && el % 5 === 0) {
// 			return 'fizzbuzz';
// 		} else if (el % 5 === 0) {
// 			return 'buzz';
// 		} else if (el % 3 === 0) {
// 			return 'fizz';
// 		} else {
// 			return el;
// 		}
// 	});
// }

//recursive version
function fizzbuzz(num, output = []) {
	if (num === 0) {
		return output;
	} else if (num % 3 === 0 && num % 5 === 0) {
		output.unshift('fizzbuzz');
	} else if (num % 3 === 0) {
		output.unshift('fizz');
	} else if (num % 5 === 0) {
		output.unshift('buzz')
	} else {
		output.unshift(num);
	}
	num--;
	return fizzbuzz(num, output);
}

module.exports = fizzbuzz;