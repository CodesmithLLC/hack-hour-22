/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  const result = [];
  
  if (array.length === 0 || array.length === 1 ){
      return null;
  }
  array.forEach((el, idx) => {
    
    let productOfAllExcept1 = 1;

    array.forEach((innerEl, innerIdx) =>{
        // console.log(parseInt(idx), parseInt(innerIdx))
        if (parseInt(idx) !== parseInt(innerIdx)){
            productOfAllExcept1 = productOfAllExcept1*innerEl

            // console.log('idx:',idx, innerIdx, productOfAllExcept1);
        }
    })
    
    result.push(productOfAllExcept1);

  
      
  });    
  return result;
}
// console.log(getAllProducts([0]));
console.log(getAllProducts([1, 7, 3, 4]));
module.exports = getAllProducts;
