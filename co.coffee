co = require 'co'

# sleep :: Int -> Promise Int
sleep = (ms) -> new Promise (done) ->
  setTimeout (-> done ms), ms

# serialize
do co ->
  console.log 'sleep 1'
  a = yield sleep(1000)
  console.log 'sleep 2'
  b = sleep(500)
  console.log 'sleep 3'
  console.log a, b
