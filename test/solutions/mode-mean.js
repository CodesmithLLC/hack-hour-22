function modemean(array) {
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
