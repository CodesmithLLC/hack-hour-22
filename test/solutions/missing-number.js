//brute force way?
function missingNum(array) {
  console.log(array.length);
  for (var i = 0; i <= array.length; i++) {
    if(array.indexOf(i+1) === -1) {
      return i+1;
    }
  }
}

// not using additional storage
function missingNum(Array) {
    var length = Array.length;
    var sum = ((length + 1) /2) * (length + 2);
    var sumMinusMissing = 0;
    for (i = 0; i < length; i++) { 
        sumMinusMissing += Array[i];
    }
    return sum - sumMinusMissing;
}

