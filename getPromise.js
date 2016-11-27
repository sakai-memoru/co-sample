'use strict';

function getPromise(file){
    return new Promise(function(resolve,reject){
        get(resolve,reject,file);
    })
}

function get(resolve,reject,file) {
  console.log('file: %s...', file);
  setTimeout(function () {
    console.log('file: %s complete', file);
    resolve('read over [' + file + ']');
    if(false){
      reject();
    }
  }, 1000);
}

module.exports = getPromise;

// debug
// getPromise('sakai.txt').then(function(data){
//   console.log(data);
// });
