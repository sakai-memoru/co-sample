/**
 * GETリクエストを非同期処理するモジュールを想定
 * @example get('http://example.com')(function() {  callback!  });
 */
var get = require('./getPromise');
var co  = require('co');

/**
 * @example 非同期処理を並列で逐次実行する
 */
co(function *(){
  var a = get('http://google.com');
  var b = get('http://yahoo.com');
  var c = get('http://cloudup.com');
  var resule = yield [a,b,c];

  console.dir(resule);
})
