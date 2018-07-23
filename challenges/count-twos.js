// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
   let i = 0;
   let count = 0;

   while (i <= num) {
      if (i.toString().match(/2/g)) {
         const twos = i.toString().match(/2/g).length;
         count += twos;
      }
      i++;
   }
   console.log(count);
}

module.exports = countTwos;
