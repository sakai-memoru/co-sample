/**
 * GETリクエストを非同期処理するモジュールを想定
 * @example get('http://example.com')(function() {  callback!  });
 */
var get = require('./getPromise');
var co  = require('co');

/**
 * @example 非同期処理を直列で逐次実行する
 */
co(function *(){
  var a = yield get('http://google.com');
  var b = yield get('http://yahoo.com');
  var c = yield get('http://cloudup.com');
  var resule = [a,b,c];

  console.dir(resule);
})
