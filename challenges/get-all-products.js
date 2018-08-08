function getAllProducts(array, i=0) {   
  let result = [];
  helper = (array, i) => {
    let holder = array.slice();
    holder.splice(i, 1)
    console.log(holder)
    console.log(array)
    result.push(holder.reduce((a,b)=> a*b , 1))
  }
  for(let i = 0; i < array.length; i ++){
    helper(array, i);
  }   
  return result
}

module.exports = getAllProducts;
