
//optimized for time

function makeSpaceArray(character, x) {
  var str = [];
  for (var i = 0; i < x; i++) {
    str.push(character);
  }
  return str;
}

function drawStairs(n) {
  var arr = makeSpaceArray(' ', n);
  while (n > 0) {
    arr[--n] = '*';
    console.log(arr.join(''));
  }
}


//optimized for space
function drawStairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      process.stdout.write(j + i + 1 >= n ? '*' : ' ');
    }
    process.stdout.write('\n');
  }
}


//optimized for both
function drawStairs(n) {
  for (var i = 1; i <= n; i++) {
    var spaces = ' '.repeat(n - i);
    var splats = '*'.repeat(i);
    console.log(spaces + splats);
  }
}
