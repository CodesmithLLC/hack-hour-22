  /*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let obj = array.reduce((a,b) => {
              a[b] ? a[b] ++ : a[b] = 1 
              return a;
            } , {})
  let arrAvg = array.reduce((a,b) => a + b, 0) / array.length
  let mode;
  let arrOfTally = []
  
  for(let key in obj){
    arrOfTally.push(obj[key])
  }
  let highest = Math.max(...arrOfTally);
  
  for(let key in obj){
    if(highest === obj[key]){
      mode = key;
    }
  }
  
  if(Number(mode) === Number(arrAvg)){
    return true;
  }
  return false;
}

const test = [1,1,1]
console.log(modemean(test))

module.exports = modemean;