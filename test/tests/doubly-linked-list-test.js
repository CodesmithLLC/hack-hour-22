const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let LinkedList;

try {
  LinkedList = require('../../challenges/doubly-linked-list.js');
} catch (e) {
  console.log('doubly-linked-list could not be tested');
}

module.exports = deliver((report) => {
  if(typeof LinkedList === 'function') {

    describe('Doubly LinkedList Test', function() {
      var list = new LinkedList();
      it('adds nodes to the list', function() {
        list.add(1);
        list.add(2);
        list.add(3);

        expect(list.head.val).to.equal(1);
        expect(list.head.next.val).to.equal(2);
        expect(list.head.next.next.val).to.equal(3);
      }, ['linked-lists']);

      it('links nodes to the previous node', function() {
        expect(list.head.prev).to.equal(null);
        expect(list.head.next.prev.val).to.equal(1);
        expect(list.head.next.next.prev.val).to.equal(2);
      }, ['linked-lists']);

      it('removes head from list and assigns new head', function() {
        list.remove(1);
        expect(list.head.val).to.equal(2);
        expect(list.head.prev).to.equal(null);
        expect(list.head.next.val).to.equal(3);
        expect(list.head.next.prev.val).to.equal(2);
      }, ['linked-lists']);

      it('removes node from middle of list', function() {
        list.add(4);
        list.remove(3);
        expect(list.head.val).to.equal(2);
        expect(list.head.next.val).to.equal(4);
        expect(list.head.next.prev.val).to.equal(2);
      }, ['linked-lists']);

      it('removes node from end of list', function() {
        list.remove(4);
        expect(list.head.val).to.equal(2);
        expect(list.head.next).to.equal(null);
      }, ['linked-lists']);

      it('removes only first instance of val', function() {
        list.add(3);
        list.add(2);
        list.remove(2);
        expect(list.head.val).to.equal(3);
        expect(list.head.next.val).to.equal(2);
      }, ['linked-lists']);

      after(() => {
        report();
      })
    });
  }
})
