const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let rotateGrid;
try {
  rotateGrid = require('../../challenges/rotate-grid.js');
} catch(error) {
  console.log('rotate-grid could not be tested');
}

module.exports = deliver((report) => {
  if(typeof rotateGrid === 'function') {
    describe('rotate-grid test', function() {
      it('should rotate grid 90 degrees and display 2x2 grid', function() {
        expect(rotateGrid([[7,8],[1,2]],2)).to.eql([[1, 7], [2, 8]]);
        expect(rotateGrid([[3,4],[7,8]],2)).to.eql([[7, 3], [8, 4]]);
      }, ['arrays', 'iteration']);

      it('should rotate a 3x3 grid', function() {
        expect(rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]],3)).to.eql([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
        expect(rotateGrid([[7,8,9],[1,2,3],[4,5,6]],3)).to.eql([[4, 1, 7], [5, 2, 8], [6, 3, 9]]);
      }, ['arrays', 'iteration']);

      it('should work with a 4x4 grid', function() {
        expect(rotateGrid([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],4)).to.eql(
          [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
      }, ['arrays', 'iteration']);

      after(() => report());
    });
  } else {
    console.log('rotate-grid was not exported properly');
  }
});
