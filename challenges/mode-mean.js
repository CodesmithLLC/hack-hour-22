/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let meanFound;
  let modeFound;
  const mean = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += array[i];
    }
    meanFound = sum / arr.length;
  }

  // find the mode of the array
  const getMode = (arr) => {
    let mode;
    let most = 0;

    for(let i = 0; i < arr.length; i++) {
      let currentEle = arr[i];
      let currCount = 0;
      for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          currCount++;
        }
      }
      if(currCount > most) {
        most = currCount;
        mode = currEle;
      }
    }
    return modeFound;
  }

  if(meanFound === modeFound) {
    return true;
  }
  return false;
}

// Hack Hour Solution Provide by Codesmith
function modemean2(array) {
  return mean(array) === mode(array);
}

function mean(array) {
  var sum = array.reduce(function(sum, el) {
    return sum + el;
  });
  return Math.floor(sum / array.length);
}

function mode(array) {
  var count = {};
  array.forEach(function(num) {
    if (num in count) {
      return count[num]++;
    }
    count[num] = 1;
  });
  var max = -Infinity;
  var modeCandidates;
  for (var num in count) {
    if (count[num] > max) {
      modeCandidates = [num];
      max = count[num];
    } else if (count[num] === max) {
      modeCandidates.push(num);
    }
  }
  return Math.max.apply(this, modeCandidates);
}

module.exports = modemean;
