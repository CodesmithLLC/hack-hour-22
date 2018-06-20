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
	if (!n > 0) return '';
	const numerals = [[1,'I'],[4, 'IV'],[5,'V'],[9, 'IX'],[10, 'X'],[50, 'L'],[90, 'XC'],[100, 'C'], [400, 'CD'], [500, 'D'],[900, 'CM'],[1000, 'M']];
	for (let i = 0; i < numerals.length; i++) {
		if (numerals[i][0] === n) return numerals[i][1];
		else if (numerals[i][0] > n) {
			n = n - numerals[i-1][0];
			return numerals[i-1][1] + romanNumeral(n);
		}
	}
	n = n - numerals[numerals.length - 1][0];
	return numerals[numerals.length - 1][1] + romanNumeral(n);
}


//module.exports = romanNumeral;


