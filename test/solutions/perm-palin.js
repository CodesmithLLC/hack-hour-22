function permPalin(str) {
  var tracker = {};
  var numOdd = 0;
  
  for (var i = 0; i < str.length; i ++) {
    tracker[str[i]] = ++ tracker[ str[i] ] || 1;
  }
  
  for (var key in tracker) {
    if (tracker[key] % 2 === 1) numOdd++;
    if (numOdd > 1) return false;
  }
  
  return true;
}
