function bruteForce(num) {
  var count = 0;
  str = String(num);

  for (var i = 2; i <= num; i++) {
    var subStr = String(i);

    for (var j = 0; j < str.length; j++) {
      if (subStr[j] === '2')
        count++;
    }
  }

  return count;
}






function checkDigits(num) {
  var str = '0' + String(num);
  var count = 0;

  for (var i = str.length - 1; i > 0; i--) {
    var slice = str.slice(0, i);
    if (str[i] > 2) {
      // add by one but leave it as the string with the leading 0
      slice = addOne(slice);
    }
    // add trailing zeroes until length matches
    slice = padNum(slice, str.length - 1);
    count += parseInt(slice);
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '2') {
      count += parseInt(str.slice(i+1) || 0) + 1;
    }
  }

  return count;
}

function addOne(str) {
  return str.slice(0, -1) + (parseInt(str.slice(-1)) + 1);
}

function padNum(str, length) {
  while (str.length < length) {
    str += '0';
  }
  return str;
}

//http://jsperf.com/count-twos-algorithm
console.log(bruteForce(30161312));  //takes about 10 seconds
console.log(checkDigits(30161312));  //takes 0.1 seconds
