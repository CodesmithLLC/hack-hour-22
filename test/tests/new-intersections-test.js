var expect = require('expect.js');
var newIntersections;
try {
  newIntersections = require('../../challenges/new-intersections.js');
} catch (e) {
  console.log('new-intersections could not be tested');
}

if (typeof newIntersections === 'function') {

  describe('newIntersections Tests', function() {
    
    it('should work with two intersecting lines', function() {
      expect(newIntersections([1, 3, 2, 2], [2, 2, 1, 3])).to.eql(1);
    });

    it('should work with no intersecting lines', function() {
      expect(newIntersections([1, 3, 2, 2], [2, 2, 1, 0])).to.eql(0);
    });

    it('should work with negative nums', function() {
      expect(newIntersections([-1, -3, -2, -2], [-2, -2, -1, -3])).to.eql(1);
    });

    it('should work with decimal nums', function() {
      expect(newIntersections([0.1, 0.3, 0.2, 0.2], [0.2, 0.2, 0.1, 0.3])).to.eql(1);
    });

    it('should ignore points that do not make lines', function() {
      expect(newIntersections([1, 3, 2, 2, 0], [2, 2, 1, 3, 3])).to.eql(1);
    });

    it('should handle lines that are not long enough', function() {
      expect(newIntersections(
        [-1, -2, 10, 2, 3, 3, 5, 5, 6], 
        [ 8, -5, -1, 3, 4, 9, 1, 6, 3]
      )).to.eql(1);
    });

    it('should handle 3 points on the same line', function() {
      expect(newIntersections(
        [-1, -2, 10, 2, 3, 3, 5, 5, 6, 9], 
        [ 8, -5, -1, 3, 4, 9, 1, 6, 3, 3]
      )).to.eql(1);
    });

    it('should handle a complex case', function() {
      expect(newIntersections(
        [-1, -2, 10, 2, 3, 3, 5, 5, 6, 9,  9, 12], 
        [ 5, -5, -1, 3, 4, 9, 1, 6, 3, 3, 10, 5]
      )).to.eql(4);
    });

  });

} else {
  console.log('newIntersections was not exported properly');
}
