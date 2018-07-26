// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {

  let output = 0;
  let str = String(num);

  for (let i = 2; i <= num; i += 1) {
    let subStr = String(i);
    for (let j = 0; j < str.length; j += 1) {
      if (subStr[j] === '2') {
        output += 1;
      }
    }
  }
  return output;
}


console.log(countTwos(1000)); 

function countTwos2(num, count = 0) {

  let str = '0' + String(num);
  console.log(str);
  for (let i = str.length - 1; i > 0; i-=1) {

  }
}

console.log(countTwos2(44));

module.exports = countTwos;
