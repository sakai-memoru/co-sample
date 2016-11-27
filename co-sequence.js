var co = require('co');
var get = require('./getPromise');

co(function *() {
  yield get('Async 1',function(p1,p2){console.log(p2)});

  yield get('Async 2',function(p1,p2){console.log(p2)});

  yield get('Async 3',function(p1,p2){console.log(p2)});
});
