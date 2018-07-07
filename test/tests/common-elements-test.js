const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let commonElements;
try {
  commonElements = require('../../challenges/common-elements.js');
} catch (e) {
  console.log('common-elements could not be tested');
}

module.exports = deliver((report) => {
  if (typeof commonElements === 'function') {

    describe('Common Elements', function() {

      it('should return Nothing in Common!', function() {
        expect(commonElements([],['dog'],[1,2,'dog'],['dog'])).to.eql("Nothing in Common!");
        expect(commonElements([1,2,5,6],['dog'],[1,2,'dog'],['dog'])).to.eql('Nothing in Common!');
      }, ['arrays', 'storage object', 'iteration']);

      it('should return a array of strings', function() {
        expect(commonElements(['dog','cat',3,4],['dog','cat'],[1,2,'dog','cat'],['dog', 'cat'])).to.eql(['cat', 'dog']);
        expect(commonElements(['dog','Ferret',3,4],[56,75,'dog','Ferret'],[1,2,'dog','Ferret'],[4,6,7,'dog', 'Ferret'])).to.eql(['dog', 'Ferret']);
      });

      it('should return a array of numbers', function() {
        expect(commonElements(['dog',3,4,5,66,69,34],[3,4,5,66,45,67,'cat'],[3,4,5,66,78,'dog','cat'],[3,4,5,66,78,'dog', 'cat'])).to.eql([3,4,5,66]);
      });

      it('should return a array of strings and numbers', function() {
        expect(commonElements(['dog',3,69,34],['dog',3,45,67,'cat'],[3,78,'dog','cat'],[3,78,'dog', 'cat'])).to.eql([3,'dog']);
      }, ['arrays', 'storage object', 'iteration']);

      it('should return a array of strings and numbers without duplicates', function() {
        expect(commonElements(['dog','dog', 3,3],['dog','dog',3,3],['dog','dog', 3,3],['dog','dog',3,3])).to.eql([3,'dog']);
      }, ['arrays', 'storage object', 'iteration']);

      after(() => report());
    });

  } else {
    console.log('commonElements was not exported properly');
  }
});
