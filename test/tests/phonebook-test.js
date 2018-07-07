const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let findName;
let makePhoneBookObject;
const jazbook = [['alex', '301-844-3421'], ['david', '301-844-0978'], ['jae', '301-844-1211'],
['jasmine', '1800-974-4539'], ['travis', '301-844-8505'], ['arnold', '301-844-5423']];


try {
  findName = require('../../challenges/phonebook.js').findName;
  makePhoneBookObject = require('../../challenges/phonebook.js').makePhoneBookObject;
} catch (e) {
  console.log('phonebook could not be tested');
}
module.exports = deliver((report) => {
  if (typeof makePhoneBookObject === 'function' && typeof findName === 'function') {
    describe('Phonebook Test', () => {
      it('should find all names in phonebook', () => {
        expect(findName(jazbook, 'jasmine')).to.eql('1800-974-4539');
        expect(findName(jazbook, 'travis')).to.eql('301-844-8505');
      }, ['arrays', 'iteration']);

      it('should not find people who do not exist phonebook', () => {
        expect(findName(jazbook, 'travissss')).to.eql(false);
        expect(findName(jazbook, 'rob')).to.eql(false);
      }, ['arrays', 'iteration']);

      it('makePhoneBookObject should return an object with the correct keys and values', () => {
        const newPhoneBook = makePhoneBookObject(jazbook);
        expect(newPhoneBook.travis).to.eql('301-844-8505');
      }, ['arrays', 'iteration']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('phonebook was not exported properly');
  }
});
