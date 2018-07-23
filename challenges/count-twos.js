// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  // declare a counter variable
  // loop through numbers from 1 to n
  // convert number to string of characters
  // if character === '2', increase count
  let count = 0;
  for (let i = 1; i <= num; i += 1) {
    const s = i.toString().split('');
    for (let j = 0; j < s.length; j += 1) {
      if (s[j] === '2') count += 1;
    }
  }
  return count;
}

module.exports = countTwos;
