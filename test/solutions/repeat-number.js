// Brute Force - O(n^2) time, O(1) space
function repeatNumbers(array) {
  for (var i = 0; i < array.length; i ++) {
    for (var j = i + 1; j < array.length; j ++) {
      if (array[i] === array[j]) return array[i];
    }
  }
}

// O(n) time, O(n) space
function repeatNumbers(array) {
  var store = {};
  
  for(var i = 0; i < array.length; i ++) {
    if (array[i] in store) return array[i];
    store[array[i]] = true;
  }
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var expected = ( ( array.length - 1 ) * array.length ) / 2;
  var actual = 0;
  
  for (var i = 0; i < array.length; i ++) {
      actual += array[i];
  }
  
  return actual - expected;
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var result = 0;
  
  for (var i = 0; i < array.length; i ++) {
    result = result ^ i ^ array[i];
  }
  
  return result;
}
