// inefficient because it must make two new arrays for each function call
function eachPermutation(arr, callback) {

  var indexesUsed = []; // can't repeat elements, so keep track of the indexes of the elements we've already used
  for (var i = 0; i < arr.length; i++) {
    indexesUsed.push(false);
  }

  permUtil([], indexesUsed);
  function permUtil(path, indexesUsed) {
    if (path.length === arr.length) { // base case. done building up path
      return callback(path);
    }
    for (var i = 0; i < arr.length; i++) {
      if (indexesUsed[i] === false) {
        var indexesUsedClone = indexesUsed.slice();
        indexesUsedClone[i] = true;
        permUtil(path.concat(arr[i]), indexesUsedClone); // the concat method creates a new array, rather than pushing to the existing array
      }
    }
  }

}

// more efficient. uses array mutability. mutates these arrays on each function call instead of creating new ones
function eachPermutation(arr, callback) {

  var path = []; // these arrays will be the only ones we create. they will get mutated
  var indexesUsed = [];

  permUtil(0);
  function permUtil(pathIndex) {
    if (pathIndex === arr.length) { // base case. done building up path
      return callback(path);
    }
    for (var i = 0; i < arr.length; i++) {
      if (!indexesUsed[i]) {  // only if this element hasn't been used yet
        indexesUsed[i] = true;
        path[pathIndex] = arr[i];
        permUtil(pathIndex + 1);
        indexesUsed[i] = false;
      }
    }
  }

}

// most efficient: Heap's algorithm. no arrays need to be created. simply swap elements of the array in place.
function eachPermutation(arr, callback) {
  heapsUtil(0);
  function heapsUtil(index) {
    if (index === arr.length) {
      return callback(arr);
    }
    for (var j = index; j < arr.length; j++) {
      swap(arr, index, j);
      heapsUtil(index + 1);
      swap(arr, index, j);
    }
  }
}


function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
