const expect = require('expect.js');
let mergeArrays;

try {
  mergeArrays = require('../../challenges/merge-array.js');
} catch (e) {
  console.log('merge-array could not be tested');
}


function makeNumArr(n) {
  var ints = [];
  for (var i = 0; i < n; i++) {
    ints.push(i);
  }
  return ints;
}
var long1 = makeNumArr(10000000);
var long2 = makeNumArr(10001000);

if (typeof mergeArrays === 'function') {

  describe('Merge array Tests', function() {

    it('should handle large inputs', function() {
      expect(mergeArrays(long1, long2)).to.be.an('array');
      expect(mergeArrays(long1, long2).length).to.be(20001000);
    });

  });
} else {
  console.log('mergeArrays was not exported properly');
}
