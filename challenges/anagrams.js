/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
 
 function anagrams(string) {
  let anagrams = [];
  // extract first element. 
  // put the other characters in an array
  // permutate over those strings... 

  string = string.split('');

  
  console.log(string);


  let resultArr = [];
  let copy = Object.assign(string);
  console.log(copy)
  // do the anagram thing here

  copy.forEach((firstelement, index, array) => {
    
    console.log(firstelement, array());


  });


  // for (let x = 0; x < string.length; x++){
  //   copy = copy.slice(1);
  //   console.log(x, string[x], copy);
  //   let newWord;
    
  //   string.reduce( (e, i) => {
  //     newWord = 0;
  //   }, 0)
  // }

  // join the string
  // push it to the result array


  // return array

  return anagrams;
}

console.log(anagrams('abc'));

module.exports = anagrams;
