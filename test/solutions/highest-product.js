// brute force
function highestProduct(array) {
  if (!array || array.length < 3) {
    return 0;
  }
  var max = -Infinity;
  eachCombination(array, 3, function(comb) {
    max = Math.max(max, comb[0] * comb[1] * comb[2]);
  });
  return max;
}

function eachCombination(arr, size, callback) {
  var end = arr.length - 1;
  var data = [];
  combinationUtil(0, 0);
  function combinationUtil(start, index) {
    // Current combination is ready to be processed, call the callback
    if (index === size) {
      return callback(data);
    }

    // replace index with all possible elements. The condition
    // "end - i + 1 >= size - index" makes sure that including one element
    // at index will make a combination with remaining elements
    // at remaining positions
    for (var i = start; i <= end && end - i + 1 >= size - index; i++) {
      data[index] = arr[i];
      combinationUtil(i + 1, index + 1);
    }
  }
}



// Sort to Get 3 Highest and 2 Lowest
function highestProduct(array) {
  if (!array || array.length < 3) {
    return 0;
  }
  array.sort(function(a, b) { return a - b; });
  var usingSmalls = array[0] * array[1] * array[array.length - 1];
  var usingBigs = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  return Math.max(usingSmalls, usingBigs);
}
