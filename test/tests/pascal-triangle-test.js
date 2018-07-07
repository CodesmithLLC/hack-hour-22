const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let pascalTriangle;
try {
  pascalTriangle = require('../../challenges/pascal-triangle.js');
} catch (e) {
  console.log('pascalTriangle could not be tested');
}

module.exports = deliver((report) => {
  if (typeof pascalTriangle === 'function') {
    describe('Pascal Triangle Test', function() {
      it('should work for small cases', function() {
        expect(pascalTriangle(1)).to.eql([[1]]);
        expect(pascalTriangle(2)).to.eql([[1],[1,1]]);
        expect(pascalTriangle(3)).to.eql([[1],[1,1],[1,2,1]]);
        expect(pascalTriangle(4)).to.eql([[1],[1,1],[1,2,1],[1,3,3,1]]);
        expect(pascalTriangle(5)).to.eql([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
      }, ['arrays', 'recursion', 'iteration', 'math']);

      it('should work for large cases', function() {
        expect(pascalTriangle(10)[9]).to.eql([1,9,36,84,126,126,84,36,9,1]);
        expect(pascalTriangle(500)[499][489]).to.eql(240894377025853300000);
        expect(pascalTriangle(5000).length).to.eql(5000);
        expect(pascalTriangle(5000)[4999][4993]).to.eql(21610394837730010000);
      }, ['large input']);

      after(() => report());
    });
  } else {
    console.log('pascalTriangle was not exported properly');
  }
});
