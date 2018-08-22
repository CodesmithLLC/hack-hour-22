var fs = require('fs');

var challenges = new Set(fs.readdirSync('./challenges'));
console.log(challenges.size, 'challenges');
var tests = fs.readdirSync('./test/tests/').map(str => str.replace(/-test/, ''));
tests.forEach(name => challenges.delete(name));


console.log('tests not found for these:');
console.log(challenges);
