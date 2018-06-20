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

    const setLevelValues = [1, 5, 10];
    const setLevelSymbols = ["I","V","X"];

    let outputString = "";

    const recurseRomanNumerals = function ( num ) {
        if ( num > 0 ) {
            let newVal;
            for ( let i = setLevelValues.length - 1; i > -1; i-- )
            {
                // check special situations
                // handle the IV and IX and XL type situations
                // didnt finish this part

                if ( num >= setLevelValues[i] ) {
                    outputString = outputString + setLevelSymbols[i];
                    newVal = num - setLevelValues[i];
                    break;
                }
            }
            recurseRomanNumerals( newVal );
        }
    }

    recurseRomanNumerals( n );

    return outputString;
}
console.log(romanNumeral(4));   //this outputs IIII
console.log(romanNumeral(5));   //this outputs V
console.log(romanNumeral(6));   //this outputs VI
console.log(romanNumeral(7));   //this outputs VII
console.log("end");

module.exports = romanNumeral;
