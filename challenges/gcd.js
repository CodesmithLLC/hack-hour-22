/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let cd;
	let i = 1;
	while (i <= a || i <= b) {
		if (a % i === 0 && b % i === 0) {
			cd = i;
		}
		i++;
	}
	return cd;
}

module.exports = gcd;