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


//  if (typeof n !== 'number') return NaN;
//     let digits = String(+n).spit('');
//     const key = ["", "C", "CC" "CCC" "CD" "D" "DC" "DCC" "DCCC" "CM", "", "X",
//         "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II",
//         "III",  "IV", "V", " VI", "VII", "VIII", "IX"];
//     let roman = '';
//     i = 3;
//     while (i--) {
//         roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//         return Array(+digits.join('') + 1).join("M") + roman 
//     }

    var obj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    let i;

    for (i in obj) {
        while (n >= obj[i]) {
            roman += i;
            n -= obj[i];
        }
    }
    return roman;
}



module.exports = romanNumeral;
