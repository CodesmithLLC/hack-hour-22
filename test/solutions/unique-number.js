// Sort O(nlogn)
function uniqueNumber(array) {
    array = array.sort(function (a, b) { return a - b; });
    for (var i = 0; i < array.length-1; i+=2) {
        if (array[i] !== array[i+1]) {
            return array[i];
        }
    }
    return array[array.length - 1];
}

// Add/Remove Duplicates O(n)
function uniqueNumber(array) {
  var store = {};
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] in store) {
      delete store[array[i]];
    } else {
      store[array[i]] = true;
    }
  }
  
  return Object.keys(store)[0];
}

// Bitwise XOR O(n)
function uniqueNumber(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
}
