const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let drawStairs;
try {
  drawStairs = require('../../challenges/draw-stairs.js');
} catch (e) {
  console.log('draw-stairs could not be tested');
}

let logOutput;

function getLogOutput() {
  logOutput = '';
  console.nativeLog = console.log;
  console.log = function() {
    logOutput += [].join.call(arguments, '') + '\n';
  }

  process.stdout.nativeWrite = process.stdout.write;
  process.stdout.write = function() {
    logOutput += arguments[0];
  }
}

function resetConsole() {
  console.log = console.nativeLog;
  process.stdout.write = process.stdout.nativeWrite;
}

module.exports = deliver((report) => {
  if (typeof drawStairs === 'function') {

/* Be careful moving template strings because spaces and newlines matter.
 * Remember that console.log automatically appends a newline character to the end
 * of every call.
 */
    describe('drawStairs Test', function() {
      it('should print stairs of 3', function() {
        getLogOutput();
        drawStairs(3);
        resetConsole();
        expect(logOutput).to.be(
`  *
 **
***`);
      }, ['logging', 'looping']);
      it('should print stairs of 8', function() {
        getLogOutput();
        drawStairs(8);
        resetConsole();
        expect(logOutput).to.be(
`       *
      **
     ***
    ****
   *****
  ******
 *******
********`);
      }, ['logging', 'looping']);
      it('should print stairs of 1', function() {
        getLogOutput();
        drawStairs(1);
        resetConsole();
        expect(logOutput).to.be('*');
      }, ['logging', 'looping']);
      after(() => {
        report();
      });
    });
  } else {
    console.log('drawStairs was not exported properly');
  }
});
