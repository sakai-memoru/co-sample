'use strict';


function get(file, callback) {
  console.log('file: %s...', file);
  setTimeout(function () {
    console.log('file: %s complete', file);
    callback(null, '(' + file + ')');
  }, 1000);
}

module.exports = get;

// debug
get('sakai.txt',function(p1,p2){console.log('p2 = ' + p2)})
