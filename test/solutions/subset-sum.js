function subsetSum(array, target) {
  if (!target) return true;
  if (!array.length) return false;
  
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}
