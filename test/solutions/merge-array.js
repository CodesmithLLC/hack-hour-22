//brute force
function mergeArrays(array1, array2) {
  return array1.concat(array2).sort(function(a, b) {
    return a > b;
  });
}


// looks better, but uses shift which is inefficient and destructive
function mergeArrays(arr1, arr2) {
  var merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0])
      merged.push(arr1.shift());
    else
      merged.push(arr2.shift());
  }
  return merged.concat(arr1, arr2);
}


// best, but the most lines of code
function mergeArrays(arr1, arr2) {
  var merged = [];
  var ind1 = 0, ind2 = 0;
  while (arr1[ind1] !== undefined || arr2[ind2] !== undefined) {
    if (arr1[ind1] < arr2[ind2])
      merged.push(arr1[ind1++]);
    else if (arr1[ind1] >= arr2[ind2])
      merged.push(arr2[ind2++]);
    else
      merged.push(arr1[ind1++] || arr2[ind2++]);
  }
  return merged;
}
