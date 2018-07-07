var spawn = require('child_process').spawn;

module.exports = function(file, resolve, reject) {
  ps = spawn('node_modules/.bin/mocha', [file]);
  ps.on('exit', function(code) {
    if (code === 0) resolve();
    else if (!code) reject(new Error('taking way too long...'));
    reject(new Error('failure on tests'));
  });
  ps.on('error', function(err) {
    throw err;
  });
  setTimeout(function() {
    ps.kill('SIGINT');
  }, 4800);
};
