/**
 * 非同期処理を直列のサンプル
 */
var getNumber = require('./pGetNumberAsync');
var co  = require('co');

/**
 * @example 非同期処理を直列で逐次実行する
 */
co(function *(){
  var a = yield getNumber(2);
  console.log(a);
  var b = yield getNumber(4);
  console.log(b);
  var c = yield getNumber(10);
  console.log(c);
  var resule = [a,b,c];

  console.dir(resule);
}).catch(function(err){console.dir(err)})
