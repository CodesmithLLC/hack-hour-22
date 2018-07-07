const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let H, e, l, o, pipe, letterGenerator;
try {
  H = require('../../challenges/pipe-functional.js').H;
  e = require('../../challenges/pipe-functional.js').e;
  l = require('../../challenges/pipe-functional.js').l;
  o = require('../../challenges/pipe-functional.js').o;
  pipe = require('../../challenges/pipe-functional.js').pipe;
  letterGenerator = require('../../challenges/pipe-functional.js').letterGenerator;
} catch (err) {
  console.log('pipe-functional could not be tested');
}

module.exports = deliver((report) => {
  if (typeof H === 'function'
    && typeof e === 'function'
    && typeof l === 'function'
    && typeof o === 'function'
    && typeof pipe === 'function'
    && typeof letterGenerator === 'function') {
    describe('Pipe Test', function () {
      it('H should return "H"', function () {
        expect(H()).to.eql('H');
      }, ['functional', 'strings']);

      it('H should take an input value', function () {
        expect(H('owdy')).to.eql('Howdy');
      }, ['functional', 'strings']);

      it('e should return "e"', function () {
        expect(e()).to.eql('e');
      }, ['functional', 'strings']);

      it('e should take an input value', function () {
        expect(e('rror')).to.eql('error');
      }, ['functional', 'strings']);

      it('l should return "l"', function () {
        expect(l()).to.eql('l');
      }, ['functional', 'strings']);

      it('l should take an input value', function () {
        expect(l('orde')).to.eql('lorde');
      }, ['functional', 'strings']);

      it('o should return "o"', function () {
        expect(o()).to.eql('o');
      }, ['functional', 'strings']);

      it('o should take an input value', function () {
        expect(o('range')).to.eql('orange');
      }, ['functional', 'strings']);

      it('pipe should take an array of functions and return a new function', function () {
        expect(pipe([H, e, l, l, o])).to.be.a('function');
      }, ['functional', 'strings']);

      it('should create the correct string when the returned function is called with no argument', function () {
        expect(pipe([H, e, l, l, o])()).to.eql('Hello');
      }, ['functional', 'strings']);

      it('should create the correct string when the returned function is called with an argument', function () {
        expect(pipe([e, l, l, o])('J')).to.eql('Jello');
      }, ['functional', 'strings']);

      it('letterGenerator should return a function', function () {
        expect(letterGenerator('a')).to.be.a('function');
      }, ['functional', 'strings']);

      it('letterGenerator should work with all types of characters', function () {
        expect(letterGenerator('a')()).to.eql('a');
        expect(letterGenerator(' ')()).to.eql(' ');
        expect(letterGenerator('!')()).to.eql('!');
        expect(letterGenerator('Dogs')()).to.eql('Dogs');
      }, ['functional', 'strings']);

      it('pipe should be able to use letter generator inside of the array passed in', function () {
        const Hello = pipe([
          letterGenerator('H'),
          letterGenerator('e'),
          letterGenerator('l'),
          letterGenerator('l'),
          letterGenerator('o'),
        ]);
        const World = pipe([
          letterGenerator('W'),
          letterGenerator('o'),
          letterGenerator('r'),
          letterGenerator('l'),
          letterGenerator('d'),
        ]);
        const helloWorld = pipe([
          Hello,
          letterGenerator(','),
          letterGenerator(' '),
          World,
          letterGenerator('!'),
        ]);
        expect(helloWorld).to.eql('Hello, World!');
      }, ['functional', 'strings']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('pipe-functional was not exported properly');
  }
});
