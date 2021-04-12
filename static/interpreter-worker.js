const lml = require('./interpreter')

onmessage = function(e) {
  let res = lml.lml.interp(x)
  postMessage(res);
}