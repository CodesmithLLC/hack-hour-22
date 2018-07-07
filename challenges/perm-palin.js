/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let array = str.split('');
    let obj = {
      "once": 0
      };
    for (let i = 0; i < array.length; i++){
      if (!(array[i] in obj)){
        obj[array[i]] = 1;
        }
      else {
        obj[array[i]] += 1;
        }  
      }
    switch(obj){
      
      case(array.length % 2 === 0):
        for(const prop in obj){
          if (obj[prop] % 2 !== 0) return false
          }
          return true;
      default: 
        for(const prop in obj){
          if (obj[prop] % 2 !== 0) {
            if (obj.once === 0){
              obj.once += 1;
              }
            else {return false;} }
          }
          return true;
      }  
}

module.exports = permPalin;