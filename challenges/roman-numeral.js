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
// check number of places to divide them into components
    let result = '';
    
    const romanNums = {
        1 : 'I',         4 : 'IV',         5 : 'V',
        9 : 'IX',        10: 'X',        40: 'XL',
        50: 'L',        90: 'XC',        100: 'C',
        400: 'CD',        500: 'D',      900: 'CM',
        1000: 'M', 
    }
    let nums = ('' + n).split(''); // coerces type
    // start from the lowest number
    let place = '1';
    for (let i = nums.length - 1; i > -1 ; i--) {
        let x = parseInt(place*nums[i]) + ''; // numeral
        if (x in romanNums) {
            console.log('hit')
            result = ''.concat(romanNums[x], result)
        }
        else {
            let y = x/place;
            console.log(y)
        }


        place = place.concat('0');
    }


    return result;
}

console.log(romanNumeral(152))
module.exports = romanNumeral;
