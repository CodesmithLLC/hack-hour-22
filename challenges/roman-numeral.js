/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
// input: a number;
// output: a string with a corresponding letter to the number
// if input is not a number, return NaN


	const obj = {
			M:1000,
			CM:900,
			D:500,
			CD:400,
			C:100,
			XC:90,
			L:50,
			XL:40,
			X:10,
			IX:9,
			V:5,
			IV:4,
			I:1
	};

	const romanArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let roman = '';

	for (let i = 0; n; i++) {
		while (n >= romanArr[i]) {
			roman += romanObj[romanArr[i]];
			n -= romanArr[i]
		}
	}
	return roman;
}



module.exports = romanNumeral;
