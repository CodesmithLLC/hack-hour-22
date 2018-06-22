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
    const romanBase = {
        1:'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    };

    let r = '';

    if (n > 10 && n < 40){
        n = (n/10).toString();
        for (i = 1; i <= parseInt(n.split('.')[0]); i++){
            r += romanBase[10];
        }
        n = parseInt(n.split('.')[1]);
    }else if (n >= 40 && n < 50){
        n = (n/10).toString();
        r += romanBase[10] + romanBase[50];       
        n = parseInt(n.split('.')[1]);
    }else if (n >= 50 && n < 89){
        r += romanBase[50];
        n = (n/10).toString();
        for (i = 1; i <= parseInt(n.split('.')[0]-5); i++){
            r += romanBase[10];
        }
        n = parseInt(n.split('.')[1]); 

    }



    if (n < 4){
        for (let i = 1; i <= n; i++){
            r += romanBase[1];
        } 
    }else if (n === 4){
        r += romanBase[1] + romanBase[5]; 
    }else if (n > 4 && n < 9){
        r += romanBase[5];
        for (let i = 1; i < n-5; i++){
            r += romanBase[1];
        } 
    }

    return r;
}

module.exports = romanNumeral;

console.log(romanNumeral(3));
console.log(romanNumeral(4));
console.log(romanNumeral(88));

