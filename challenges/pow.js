/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */



function pow(base, power, output = 1) {
	switch (power) {
		case -1: // base case for negative exponent
			return 1 / (output * base);
		case 0: //return 1 if called with 0 as power
			return 1;
		case 1: //base case for positive exponent
			return output * base;
		default:
			power > 0 ? power-- : power++; //if running with positive exponent, decrement. if negative, increment
			output = output * base;
			return pow(base, power, output)
	}
}  


module.exports = pow;

