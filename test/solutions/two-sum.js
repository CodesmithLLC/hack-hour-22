// Brute Force
function twoSum(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

// Brute Force Improved
function twoSum(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

// Sort followed by optimized for loop
function twoSum(arr, n) {
  arr.sort(function (a, b) {return a - b;});
  var current;
  for (var i = 0, j = arr.length - 1; i < arr.length && j >= 0; ) {
    current = arr[i] + arr[j];
    if (current === n) return true;
    
    if (current > n) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

// Hash
function twoSum(arr, n) {
  var nums = {};
  for (var i = 0; i < arr.length; i++) {
    nums[arr[i]] = i;
  }
  for (var j = 0; j < arr.length; j++) {
    if (j !== nums[n - arr[j]]) return true;
  }
  return false;
}

// Hash improved
function twoSum(arr, n) {
  var nums = {};
  for (var i = 0; i < arr.length; i++) {
    if (nums[n - arr[i]]) return true;
    
    nums[arr[i]] = 1;
  }
  return false;
}
