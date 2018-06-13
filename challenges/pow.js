/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1, negativeFlag = false) {
  if (power === 0 && !negativeFlag) {
    // power positive power
    return result;
  }
  else if (power === 0 && negativeFlag) {
    return 1/result;
  }
 	
  
 // account for edge case when power is negative
  if (power < 0){
    negativeFlag = true;
  }
	  
  
	result = result * base;
  
  if (negativeFlag) {
  	// for negative power
    return pow(base, power+1, result, negativeFlag)  
  }
  else {  
    // for positive power
	  return pow(base, power-1, result, negativeFlag)  
  }
  
}

console.log(pow(3,2))
console.log(pow(2,-2))

// module.exports = pow;
