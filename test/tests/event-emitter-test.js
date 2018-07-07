const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let EventEmitter;
try {
  EventEmitter = require('../../challenges/event-emitter.js');
} catch (e) {
  console.log('event-emitter could not be tested');
}

module.exports = deliver((report) => {
  if (typeof EventEmitter === 'function') {
    describe('EventEmitter Tests', function() {
      let instance;

      beforeEach(function() {
        instance = new EventEmitter();
      });

      it('should trigger with one event listener', function() {
        let count = 0;
        instance.on('increment', function() {
          count++;
        });
        instance.trigger('increment');
        expect(count).to.eql(1);
      }, ['js fundamentals', 'closures']);

      it('should handle multiple listeners', function() {
        let count = 0;
        let count_2 = 0;
        instance.on('increment', function() {
          count++;
        });
        instance.on('increment_2', function() {
          count_2++;
        });
        instance.trigger('increment');
        expect(count).to.eql(1);
        expect(count_2).to.eql(0);
        instance.trigger('increment_2');
        expect(count).to.eql(1);
        expect(count_2).to.eql(1);
      }, ['js fundamentals', 'closures']);

      it('should handle mulitple listeners on the same event', function() {
        let count = 0;
        let count_2 = 0;
        instance.on('increment',function() {
          count++;
        });
        instance.on('increment',function() {
          count_2++;
        });
        instance.trigger('increment');
        expect(count).to.eql(1);
        expect(count_2).to.eql(1);
      }, ['js fundamentals', 'closures']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('EventEmitter was not exported properly');
  }
});
