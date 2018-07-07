const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let parseDates;

try {
  parseDates = require('../../challenges/parse-dates.js');
} catch(e) {
  console.log('parse-dates could not be tested.');
}

module.exports = deliver((report) => {
  if (typeof parseDates === 'function') {

    describe('parse-dates tests', () => {
      let today;

      before(() => {
        today = new Date();
      });

      it('correctly handles am/pm in date string', () => {
        let parsedDate = parseDates('Today 12:01 AM');
        expect(parsedDate.getHours()).to.equal(0);

        parsedDate = parseDates('Today 11:01 AM');
        expect(parsedDate.getHours()).to.equal(11);

        parsedDate = parseDates('Today 12:01 PM');
        expect(parsedDate.getHours()).to.equal(12);

        parsedDate = parseDates('Today 1:01 PM');
        expect(parsedDate.getHours()).to.equal(13);
      });

      it('correctly parses date formatted for today', () => {
        const parsedDate = parseDates('Today 2:01 PM');

        expect(parsedDate.getDay()).to.equal(today.getDay());
        expect(parsedDate.getDate()).to.equal(today.getDate());
        expect(parsedDate.getHours()).to.equal(14);
        expect(parsedDate.getMinutes()).to.equal(1);
      });

      it('correctly parses date formatted for this week', () => {
        let parsedDate = parseDates('Monday 1:56 AM');
        const monday = last(1);

        expect(parsedDate.getDay()).to.equal(monday.getDay());
        expect(parsedDate.getDate()).to.equal(monday.getDate());
        expect(parsedDate.getHours()).to.equal(1);
        expect(parsedDate.getMinutes()).to.equal(56);

        parsedDate = parseDates('Thursday 11:09 AM');
        const thursday = last(4);

        expect(parsedDate.getDay()).to.equal(thursday.getDay());
        expect(parsedDate.getDate()).to.equal(thursday.getDate());
        expect(parsedDate.getHours()).to.equal(11);
        expect(parsedDate.getMinutes()).to.equal(9);
      });

      it('correctly parses date formatted by month', () => {
        const parsedDate = parseDates('Jan 1st 8:00 PM');

        expect(parsedDate.getDate()).to.equal(1);
        expect(parsedDate.getMonth()).to.equal(0);
        expect(parsedDate.getFullYear()).to.equal(today.getFullYear());
        expect(parsedDate.getHours()).to.equal(20);
        expect(parsedDate.getMinutes()).to.equal(0);
      });

      it('just returns today if date is improperly formatted', () => {
        let parsedDate = parseDates('Jan');
        expect(parsedDate.getDate()).to.equal(today.getDate());
        expect(parsedDate.getMonth()).to.equal(today.getMonth());
        expect(parsedDate.getFullYear()).to.equal(today.getFullYear());
        expect(parsedDate.getHours()).to.equal(today.getHours());
        expect(parsedDate.getMinutes()).to.equal(today.getMinutes());

        parsedDate = parseDates('Jan 1st 9:00');
        expect(parsedDate.getDate()).to.equal(today.getDate());
        expect(parsedDate.getMonth()).to.equal(today.getMonth());
        expect(parsedDate.getFullYear()).to.equal(today.getFullYear());
        expect(parsedDate.getHours()).to.equal(today.getHours());
        expect(parsedDate.getMinutes()).to.equal(today.getMinutes());
      });
    });
  }
});

// Return last occurrence of day of week not including today
function last(target) {
  const today = new Date();

  // Avoid infinite loop if target not a day of week
  if (target < 0 || target > 6) return today;

  today.setDate(today.getDate() - 1);
  while(today.getDay() !== target) {
    today.setDate(today.getDate() - 1);
  }

  return today;
}
