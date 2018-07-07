//brute force
function gcd(a, b) {
  var div = Math.min(a, b);
  for (var i = div; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
}

//euclidean algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}