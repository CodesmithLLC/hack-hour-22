// O(n) time
function findInOrderedSet(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

// O(log n) time
function findInOrderedSet(arr, target) {
  function binSearch(start, end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    if (end === start) return false;
    if (arr[mid] > target)
      return binSearch(start, mid - 1);
    else
      return binSearch(mid + 1, end);
  }
  return binSearch(0, arr.length - 1);
}
