/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let value = base, runTimes = power;

    if(power === 0){
        return 1;
    }else if(power < 0){
        runTimes = Math.abs(power);
    }

    function f(n, times){
        return value *= base;
    }

    while (runTimes > 1){
        f(base, runTimes);
        runTimes -= 1;
    }

    if (power < 0){
        return 1/value;
    }
    return value;

}

module.exports = pow;

//console.log(pow(-2, 3));


// function pow(base, power) {
//     // Base case
//     if (power === 0) return 1;
//     // Negative powers
//     if (power < 0) return 1 / pow(base, -power);
//     // Recursive case
//     return base * pow(base, power - 1);
//   }