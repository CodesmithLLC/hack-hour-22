/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 * *
 * *     128 64  32 16 8 4 2
 */

 // could have just used math to determine the decimal number without using the binTable...
 // TODO! next time

function binToDec(binary) {
    const binTable = {
        1:			          1,
        10:			          2,
        100:		    	  4,
        1000:		    	  8,
        10000:		    	 16,
        100000:		    	 32,
        1000000:	    	 64,
        10000000:	    	124,
        100000000:	    	256,
        1000000000:	    	512,
        10000000000:		1024,
        100000000000:		2048,
        1000000000000:		4096,
        10000000000000:		8192,
        100000000000000:	16384,
        1000000000000000:		32768,
        10000000000000000:		65536,
        100000000000000000:		131072,
        1000000000000000000:		262144,
        10000000000000000000:		524288,
        100000000000000000000:		1048576,
        1000000000000000000000:		2097152,
        
        
    }
    let result = 0;
    let nums = ('' + binary).split(''); // coerces type
    // start from the lowest number
    let place = '1';
    for (let i = nums.length - 1; i > -1 ; i--) {
        let x = parseInt(place*nums[i]) + ''; // numeral
       
        // console.log("place", parseInt(place*nums[i]), binTable[parseInt(place*nums[i])]);
        if (binTable[parseInt(place*nums[i])]){
            result = result + binTable[parseInt(place*nums[i])];
        }
        
        // console.log(result);
        place = place.concat('0');
    }


    return result;

}

// console.log(binToDec('9798984321'))
console.log(binToDec('1000000000000'));
console.log(binToDec('11'));
console.log(binToDec('100'));
console.log(binToDec('0101'));




module.exports = binToDec;
